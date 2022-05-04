import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import md from 'rollup-plugin-md';
import posthtml from 'rollup-plugin-posthtml-template';
import alias from '@rollup/plugin-alias'
import { defineConfig } from 'rollup'
import progress from 'rollup-plugin-progress'



const production = !process.env.ROLLUP_WATCH;
function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}


export default defineConfig({
	input: 'src/index.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		// alias({
		// 	entries: [
		// 		{ find: 'dativejs', replacement: __dirname + '/packages/dative/dist/dative.esm.js' },
		// 	]
		// }),s

		// typescript(),
		!production && serve(),
		!production && livereload(),
		// !production && dev({
		// 	port: 5000,
		// }),
		terser(),
		css({ output: 'bundle.css' }),
		resolve({
			browser: true
		}),
		commonjs(),
		image(),
		posthtml(),
		md(),
		json(),
		progress()
	],
	watch: {
		clearScreen: false
	}
})