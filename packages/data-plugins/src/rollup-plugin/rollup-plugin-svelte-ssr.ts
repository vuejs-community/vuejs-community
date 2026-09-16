import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-svelte-ssr',
  description: 'Server-side rendering of Svelte app at build-time using Rollup plugin',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'svelte',
    'ssr',
    'rollup-plugin',
  ],
  source: {
    github: 'akaSybe/rollup-plugin-svelte-ssr',
    npm: 'rollup-plugin-svelte-ssr',
  },
  links: {
    github: 'https://github.com/akaSybe/rollup-plugin-svelte-ssr',
    npm: 'https://www.npmjs.com/package/rollup-plugin-svelte-ssr',
    website: 'https://github.com/akaSybe/rollup-plugin-svelte-ssr#readme',
  },
  stats: {
    stars: 35,
    downloads: {
      monthly: 46,
      weekly: 10,
    },
  },
})
