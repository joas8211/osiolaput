import html from '@rollup/plugin-html';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'src/app.js',
    output: {
        dir: 'dist',
        format: 'iife',
    },
    plugins: [
        html({
            title: '',
            attributes: { html: { lang: 'fi' } },
        }),
        svelte(),
        resolve(),
    ],
};