// The admin's Data card (specs/cloudflare.md): the fields the owner used to change by hand in the sheet (a PIN, a level,
// redeemed points, the old daily link, a family's code or goal, a setting). After the move to Cloudflare the sheet is
// a nightly copy, so these edits happen here. Admin PIN only; every change goes to the audit trail (PINs masked).

var EDIT = {
  Girls: { key: 'Name', fields: ['PIN', 'Level', 'Age', 'Group', 'Email', 'Redeemed', 'Missions', 'PetName', 'NestPerDay', 'NestArcadeMin'] },
  Groups: { key: 'Id', fields: ['Name', 'ParentPIN', 'Goal', 'GoalReward', 'Email', 'Friends'] },
  Settings: { key: 'Key', fields: ['Value'] }
};
// Settings with a card of their own (the reminder hours re-create the triggers there), or that only the code writes.
var EDIT_SETTINGS_SKIP = { ReminderHour: 1, LastCallHour: 1, ParentSummaryHour: 1, InviteCode: 1 };
var EDIT_SECRET = { PIN: 1, ParentPIN: 1, AdminPIN: 1 };

function editAdmin(pin) {
  ensureSetup();
  if (!parentAccess(pin).isAdmin) throw new Error('Only the admin can do this');
}

function apiAdminData(pin) {
  editAdmin(pin);
  var out = {};
  Object.keys(EDIT).forEach(function (t) {
    var spec = EDIT[t];
    out[t] = { key: spec.key, fields: spec.fields, rows: readTable(t).filter(function (r) {
      return String(r[spec.key] || '').trim() && !(t === 'Settings' && EDIT_SETTINGS_SKIP[r.Key]);
    }).map(function (r) {
      var v = {};
      spec.fields.forEach(function (f) { v[f] = r[f] === undefined || r[f] === null ? '' : String(r[f]); });
      return { key: String(r[spec.key]).trim(), values: v };
    }) };
  });
  out.levels = LEVELS.concat(['nest']);
  return out;
}

function editCheck(table, key, field, value) {
  var v = String(value == null ? '' : value).trim();
  var numeric = function () { if (v !== '' && !/^\d+$/.test(v)) throw new Error(field + ' must be a whole number'); };
  if (table === 'Girls') {
    if (field === 'PIN') {
      if (!/^\d{4}$/.test(v)) throw new Error('A PIN has 4 digits');
      if (readTable('Girls').some(function (k) { return k.Name !== key && String(k.PIN) === v; })) throw new Error('Another kid has this PIN');
    }
    if (field === 'Level' && LEVELS.indexOf(v) < 0 && v !== 'nest') throw new Error('Unknown level');
    if (field === 'Group' && !groups().some(function (g) { return String(g.Id) === v; })) throw new Error('No such family');
    if (field === 'Missions' && v !== '' && v !== 'no') throw new Error('Missions is empty or no');
    if (['Age', 'Redeemed', 'NestPerDay', 'NestArcadeMin'].indexOf(field) >= 0) numeric();
  }
  if (table === 'Groups') {
    if (field === 'ParentPIN') {
      if (v !== '' && !/^\d{4}$/.test(v)) throw new Error('A parent code has 4 digits (or empty: admin only)');
      if (v && (v === String(getSetting('AdminPIN')) || groups().some(function (g) { return String(g.Id) !== key && String(g.ParentPIN) === v; }))) throw new Error('This code is taken');
    }
    if (field === 'Name' && !v) throw new Error('A family needs a name');
    if (field === 'Goal') numeric();
    if (field === 'Friends' && v !== '' && v !== 'no') throw new Error('Friends is empty or no');
  }
  if (table === 'Settings') {
    if (EDIT_SETTINGS_SKIP[key]) throw new Error('Change this one in its own card');
    if (key === 'AdminPIN' && !/^\d{4}$/.test(v)) throw new Error('A PIN has 4 digits');
  }
  return v;
}

// changes = { field: value, ... } for the row whose key column is key.
function apiAdminEdit(pin, table, key, changes) {
  editAdmin(pin);
  var spec = EDIT[table];
  if (!spec) throw new Error('Not editable');
  key = String(key || '').trim();
  var fields = Object.keys(changes || {});
  if (!fields.length) throw new Error('Nothing to change');
  fields.forEach(function (f) { if (spec.fields.indexOf(f) < 0) throw new Error('Not editable: ' + f); });
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var clean = {};
    fields.forEach(function (f) { clean[f] = editCheck(table, key, f, changes[f]); });
    var sh = sheet(table), values = sh.getDataRange().getValues(), head = values[0], kc = head.indexOf(spec.key), row = -1;
    for (var i = 1; i < values.length; i++) if (String(values[i][kc]).trim() === key) { row = i; break; }
    if (row < 0) throw new Error('Not found');
    fields.forEach(function (f) {
      var c = head.indexOf(f);
      if (c < 0) throw new Error('No column ' + f);
      sh.getRange(row + 1, c + 1).setValue(clean[f]);
    });
    invalidate(table);
    if (table === 'Settings' || table === 'Groups') invalidate('Settings');
    audit('admin', 'admin', table === 'Girls' ? String(readTable('Girls').filter(function (k) { return k.Name === key; }).map(function (k) { return k.Group; })[0] || '') : table === 'Groups' ? key : '',
      'edit', table + ' ' + key + ': ' + fields.map(function (f) { return f + (EDIT_SECRET[f] || EDIT_SECRET[key] ? ' (changed)' : ' = ' + clean[f]); }).join(', '), true);
  } finally {
    lock.releaseLock();
  }
  return apiAdminData(pin);
}
