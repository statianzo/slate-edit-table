const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const path = require('path');
const pkg = require(path.resolve(__dirname, './package.json'));

export default {
  input: 'src/index.js',
  output: [
    {file: pkg.main, format: 'cjs', sourcemap: true},
    {file: pkg.module, format: 'es', sourcemap: true},
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
        [require.resolve('react')]: ['createElement', 'Component', 'Fragment'],
      },
    }),
  ],
  external: [
    'slate',
    'slate-react',
    'immutable',
  ],
};
