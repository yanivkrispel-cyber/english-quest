// Prints the listening episodes of docs/missions/*.js as JSON for tools/missions_audio.py:
// [{ id, level, voices: { A: 'af_heart', ... }, parts: [[['A', 'line'], ...], ...] }]
const { load } = require('../test/missions-check.js');
const { missions } = load();
const out = [];
Object.keys(missions).sort().forEach(file => missions[file].forEach(m => {
  if (m.show) out.push({ id: m.id, level: file, voices: m.show.voices, parts: m.show.parts.map(p => p.lines) });
}));
process.stdout.write(JSON.stringify(out));
