// Nightly backups of the Chacho server (specs/cloudflare.md, "Backups"). Every night the Durable Object writes its whole
// export (the same JSON as /admin/export), gzipped, into its own table `backups`, one row per megabyte, and keeps the last
// 14 days. A bad write that the nightly sheet mirror copies over the sheet the next morning is still in yesterday's backup.
// Cloudflare's point-in-time recovery (30 days, the whole database) is the second line; see the spec.
//
// sql(query, ...params) -> array of rows, like the store in platform/gas.js (ctx.storage.sql.exec().toArray() in the
// Durable Object, node:sqlite in test/cf-units.mjs). No Cloudflare import here, so Node can test it.

export const BACKUP = { keepDays: 14, part: 1000000 };

export function backupTable(sql) {
  sql('CREATE TABLE IF NOT EXISTS backups (day TEXT, part INTEGER, at INTEGER, bytes INTEGER, data BLOB, PRIMARY KEY (day, part)) WITHOUT ROWID');
}

async function pipe(bytes, stream) {
  const out = new Response(new Blob([bytes]).stream().pipeThrough(stream));
  return new Uint8Array(await out.arrayBuffer());
}
export const gzipJson = obj => pipe(new TextEncoder().encode(JSON.stringify(obj)), new CompressionStream('gzip'));
export const gunzipJson = async bytes => JSON.parse(new TextDecoder().decode(await pipe(bytes, new DecompressionStream('gzip'))));

// Saves one day's backup (replacing that day's earlier one) and drops the days beyond the newest `keepDays`.
// Returns { day, bytes, parts, dropped }.
export function backupSave(sql, day, gz, at = Date.now()) {
  backupTable(sql);
  sql('DELETE FROM backups WHERE day = ?', day);
  let parts = 0;
  for (let i = 0; i < gz.length; i += BACKUP.part) {
    sql('INSERT INTO backups (day, part, at, bytes, data) VALUES (?, ?, ?, ?, ?)', day, parts++, at, gz.length, gz.subarray(i, i + BACKUP.part));
  }
  const days = sql('SELECT DISTINCT day FROM backups ORDER BY day DESC').map(r => r.day);
  const old = days.slice(BACKUP.keepDays);
  old.forEach(d => sql('DELETE FROM backups WHERE day = ?', d));
  return { day, bytes: gz.length, parts, dropped: old };
}

// The days kept, newest first: [{ day, at, bytes, parts }].
export function backupList(sql) {
  backupTable(sql);
  return sql('SELECT day, MAX(at) AS at, MAX(bytes) AS bytes, COUNT(*) AS parts FROM backups GROUP BY day ORDER BY day DESC');
}

// One day's gzipped export, or null.
export function backupLoad(sql, day) {
  backupTable(sql);
  const rows = sql('SELECT data FROM backups WHERE day = ? ORDER BY part', day);
  if (!rows.length) return null;
  const chunks = rows.map(r => (r.data instanceof Uint8Array ? r.data : new Uint8Array(r.data)));
  const out = new Uint8Array(chunks.reduce((n, c) => n + c.length, 0));
  let at = 0;
  chunks.forEach(c => { out.set(c, at); at += c.length; });
  return out;
}

// A quick look at an export: rows per sheet, for the restore drill (compare with /admin/stats).
export function exportCounts(data) {
  const out = {};
  (data.names || []).forEach(n => { out[n] = Math.max(0, (data.sheets[n] || []).length - 1); });
  return out;
}
