const fs = require('fs');
const path = require('path');
const vm = require('vm');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const assert = (condition, msg) => { if (!condition) throw new Error(msg); console.log('PASS:', msg); };
assert(/<title>[^<]*v56\.10[^<]*<\/title>/i.test(html), 'document title v56.10');
const scripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script\s*>/gi)].map(m => m[1]);
assert(scripts.length >= 35, `embedded scripts present (${scripts.length})`);
for (let i = 0; i < scripts.length; i++) {
  try { new vm.Script(scripts[i], {filename: `embedded-script-${i+1}.js`}); }
  catch(e) { throw new Error(`JavaScript syntax error in embedded script ${i+1}: ${e.message}`); }
}
console.log('PASS: JavaScript syntax for all embedded scripts');
const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style\s*>/gi, '');
const ids = [...markup.matchAll(/\bid=["']([^"']+)["']/gi)].map(m => m[1]);
const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
assert(duplicates.length === 0, `no duplicate static element IDs (${ids.length} IDs)`);
assert(/Backup & Restore/i.test(html), 'backup interface present');
assert(/No Ride Needed/i.test(html), 'event decision controls present');
console.log('STATIC VALIDATION COMPLETE — does not replace browser and integration tests.');
