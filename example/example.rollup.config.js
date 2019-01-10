const babel = require('rollup-plugin-babel');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const path = require('path');
const replace = require('rollup-plugin-replace');
const nodeBuiltins = require('rollup-plugin-node-builtins');
const nodeGlobals = require('rollup-plugin-node-globals');

export default {
  input: 'example/main.js',
  output: [
    {
      file: 'example/bundle.js',
      format: 'iife',
      globals: {
        tty: '{}',
        util: '{}',
      },
      sourcemap: 'inline',
    },
  ],
  watch: {
    clearScreen: false,
  },
  plugins: [
    nodeResolve({
      preferBuiltins: false,
    }),
    replace({
      delimiters: ['', ''],
      values: {
        'process.env.NODE_ENV': JSON.stringify('development'),
        'process.stderr.fd': JSON.stringify({}),
      },
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs({
      inclue: 'node_modules/**',
      namedExports: {
        [require.resolve('esrever')]: ['reverse'],
        [require.resolve('react')]: ['createElement', 'Component', 'Fragment'],
        [require.resolve('immutable')]: [
          'Record',
          'Set',
          'Range',
          'List',
          'Map',
          'OrderedSet',
          'is',
          'Stack',
        ],
      },
    }),
    nodeGlobals(),
    nodeBuiltins(),
  ],
};
