import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import html from 'rollup-plugin-html';
import typescript from 'rollup-plugin-typescript2';
import styles from 'rollup-plugin-styles';

export default {
  input: 'src/index.tsx',
  output: {
    sourcemap: false,
    file: 'build/bundle.js',
    format: 'iife',
  },
  plugins: [
    html({
      include: '**/*.html',
    }),
    styles(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    typescript(),
    uglify(),
  ],
};
