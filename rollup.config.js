const localResolve = require('rollup-plugin-local-resolve');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const builtins = require('rollup-plugin-node-builtins');
const globals = require('rollup-plugin-node-globals');
const babel = require('rollup-plugin-babel');

module.exports = {
  input: 'src/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    builtins(),
    globals(),
    localResolve(),
    commonjs({
      namedExports: {
        './node_modules/elliptic/lib/elliptic.js': ['ec', 'eddsa']
      }
    }),
    resolve()
  ],
  output: {
    file: 'dist/openpgp.es5.js',
    format: 'cjs'
  }
};
