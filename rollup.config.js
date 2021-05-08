import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import html from 'rollup-plugin-html';
import css from 'rollup-plugin-import-css';
import typescript from 'rollup-plugin-typescript2';

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
    css({
      include: '**/*.css',
      minify: true,
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    typescript(),
    uglify(),
  ],
};
