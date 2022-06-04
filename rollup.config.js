import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
// import resolve from 'rollup-plugin-node-resolve'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'
import scss from 'rollup-plugin-scss'
import replace from '@rollup/plugin-replace'

const isDevelopment = process.env.NODE_ENV === 'development'
const outputDest = isDevelopment ? 'test/' : 'dist/'

const config = {
  input: 'index.js',
  output: [
    /** UMD */
    {
      file: `${outputDest}/index.min.js`,
      name: 'Ibis',
      exports: 'default',
      format: 'umd',
      plugins: isDevelopment ? [] : [terser()]
    },
    {
      file: `${outputDest}/index.js`,
      name: 'Ibis',
      format: 'umd',
      exports: 'default',
      plugins: []
    },
  ],
  plugins: [
    nodeResolve({ browser: true }),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    scss(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    isDevelopment ? livereload() : undefined,
    isDevelopment ? serve({
      open: true, // 自动打开页面
      port: 8000,
      openPage: '/', // 打开的页面
      contentBase: 'test'
    }) : undefined
  ]
}
export default config