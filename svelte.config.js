import sveltePreprocess from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess(),
  experimental: {
    useVitePreprocess: true,
  },
};
