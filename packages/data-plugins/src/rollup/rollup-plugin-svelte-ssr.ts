import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-svelte-ssr',
  description: 'Server-side rendering of Svelte app at build-time using Rollup plugin',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'svelte',
    'ssr',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/akaSybe/rollup-plugin-svelte-ssr',
    npm: 'https://www.npmjs.com/package/rollup-plugin-svelte-ssr',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 15,
    },
  },
})
