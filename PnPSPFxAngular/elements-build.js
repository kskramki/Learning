const concat = require('concat');

(async function build() {
  const files = [
    './dist/PnPSPFxAngular/runtime.js',
    './dist/PnPSPFxAngular/polyfills.js',
    './dist/PnPSPFxAngular/scripts.js',
    './dist/PnPSPFxAngular/main.js'
  ];
  await concat(files, './dist/PnPSPFxAngular/bundle.js');
})();
