import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@braiwet/rollup-plugin-svelte-static-html',
  description: 'Generate static html file from your Svelte component using Rollup',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'svelte',
    'static',
    'html',
    'ssr',
    'generate',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/basileraiwet/rollup-plugin-svelte-static-html',
    npm: 'https://www.npmjs.com/package/@braiwet/rollup-plugin-svelte-static-html',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 11,
    },
  },
})
