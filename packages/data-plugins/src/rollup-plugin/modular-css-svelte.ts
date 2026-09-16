import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@modular-css/svelte',
  description: 'Add modular-css support to svelte',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'svelte',
    'svelte-preprocess',
    'rollup',
    'rollup-plugin',
    'rollup-plugin-svelte',
    'css',
    'css-modules',
    'modular-css',
    'postcss',
  ],
  source: {
    github: 'tivac/modular-css',
    npm: '@modular-css/svelte',
  },
  links: {
    github: 'https://github.com/tivac/modular-css',
    npm: 'https://www.npmjs.com/package/@modular-css/svelte',
    website: 'https://m-css.com',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 95,
      weekly: 10,
    },
  },
})
