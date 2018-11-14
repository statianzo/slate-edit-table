const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const pkg = require('./package.json');

export default {
  input: 'src/index.js',
  output: [
    {file: pkg.main, format: 'cjs'},
    {file: pkg.module, format: 'es'},
  ],
  plugins: [
    nodeResolve({
      preferBuiltins: false,
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs({
      inclue: 'node_modules/**',
      namedExports: {
        [require.resolve('esrever')]: ['reverse'],
      },
    }),
  ],
  external: [
    'slate',
    'immutable',
  ],
};
