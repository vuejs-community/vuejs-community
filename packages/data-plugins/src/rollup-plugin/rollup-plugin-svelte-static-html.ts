import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-svelte-static-html',
  description: 'Generate static html file from your Svelte component using Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'svelte',
    'static',
    'html',
    'ssr',
    'generate',
  ],
  source: {
    github: 'vladshcherbin/rollup-plugin-svelte-static-html',
    npm: 'rollup-plugin-svelte-static-html',
  },
  links: {
    github: 'https://github.com/vladshcherbin/rollup-plugin-svelte-static-html',
    npm: 'https://www.npmjs.com/package/rollup-plugin-svelte-static-html',
    website: 'https://github.com/vladshcherbin/rollup-plugin-svelte-static-html#readme',
  },
  stats: {
    stars: 19,
    downloads: {
      monthly: 45,
      weekly: 22,
    },
  },
})
