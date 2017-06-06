
const rollup = require('rollup');
const buble = require('rollup-plugin-buble');


// use rollup module, make src/main.js as entry point to code
rollup.rollup({
  entry: 'src/main.js',
  plugins: [ buble() ]
}).then(function(bundle){
  bundle.write({
    format: 'iife',
    dest: 'dist/bundle.js'
  });
});
