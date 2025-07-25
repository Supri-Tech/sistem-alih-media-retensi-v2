import adapter from '@sveltejs/adapter-auto';
import { preprocessMeltUI, sequence } from "@melt-ui/pp";
import preprocess from 'svelte-preprocess';

console.log("Preprocessing dengan Melt UI aktif!");


/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sequence([preprocess(), preprocessMeltUI()]),
  kit: {
    adapter: adapter(),
  },
  compilerOptions: {
    dev: true,
    css: 'injected',
    enableSourcemap: true,
  }
};


export default config;
