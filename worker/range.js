// Cloudflare front end (wrangler.jsonc): every file comes straight from docs/ except the recordings, which pass
// through here. The static asset server ignores Range and always answers 200 with the whole file, and Safari will
// not play audio from a server that does not answer a range with 206.
export default {
  async fetch(request, env) {
    const res = await env.ASSETS.fetch(request);
    const range = request.headers.get('Range');
    const m = range && /^bytes=(\d*)-(\d*)$/.exec(range.trim());
    if (!m || res.status !== 200 || request.method !== 'GET') return res;
    const body = await res.arrayBuffer(), size = body.byteLength;
    let start, end;
    if (m[1] === '') { start = Math.max(0, size - Number(m[2])); end = size - 1; }  // the last N bytes
    else { start = Number(m[1]); end = m[2] === '' ? size - 1 : Math.min(Number(m[2]), size - 1); }
    const headers = new Headers(res.headers);
    headers.set('Accept-Ranges', 'bytes');
    if (start >= size || start > end) {
      headers.set('Content-Range', 'bytes */' + size);
      return new Response(null, { status: 416, headers });
    }
    headers.set('Content-Range', 'bytes ' + start + '-' + end + '/' + size);
    headers.set('Content-Length', String(end - start + 1));
    return new Response(body.slice(start, end + 1), { status: 206, headers });
  }
};
