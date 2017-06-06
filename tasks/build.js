
const rollup = require('rollup');
const buble = require('rollup-plugin-buble');
const copy = require('copy');

buildJS();
buildHTML();


function buildJS(){
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
}

function buildHTML(){
  copy('src/*.html', 'dist', function(err, files){
    if (err) throw err;
  });
}
