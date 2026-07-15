/*

Mit dem nativen Node.js Test RunnerWenn Sie das eingebaute node:test-Modul von Node.js verwenden, können Sie gezielt isolieren, welcher Test ausgeführt wird.Fügen Sie .only an die test()-Funktion an:javascriptconst test = require('node:test');
const assert = require('node:assert');

// Dieser Test wird ignoriert
test('dieser Test wird übersprungen', (t) => {
  assert.strictEqual(1, 1);
});

// Nur dieser Test wird ausgeführt
test.only('dieser Test wird ausgeführt', (t) => {
  assert.strictEqual(2, 2);
});
Führen Sie den Test in Ihrem Terminal mit folgendem Befehl aus:bashnode --test pfad/zur/datei.js

terminal: node --test --test-only test/warenkorb.test.js


Die Funktion muss noch export haben in der Funktion

*/