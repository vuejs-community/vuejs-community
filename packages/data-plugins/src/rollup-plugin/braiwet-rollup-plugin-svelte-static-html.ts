import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@braiwet/rollup-plugin-svelte-static-html',
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
  links: {
    github: 'https://github.com/basileraiwet/rollup-plugin-svelte-static-html',
    npm: 'https://www.npmjs.com/package/@braiwet/rollup-plugin-svelte-static-html',
    website: 'https://github.com/basileraiwet/rollup-plugin-svelte-static-html#readme',
  },
  source: {
    github: 'basileraiwet/rollup-plugin-svelte-static-html',
    npm: '@braiwet/rollup-plugin-svelte-static-html',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 3,
    },
  },
})
