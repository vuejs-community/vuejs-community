import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-sp-rest-proxy',
  description: '[Rollup](https://rollupjs.org) / [Vite](https://vitejs.dev) plugin that wires [sp-rest-proxy](https://github.com/koltyakov/sp-rest-proxy) into the dev server so SharePoint REST calls resolve locally while you build.',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'plugin',
    'sp-rest-proxy',
    'rollup-plugin',
    'SharePoint',
    'vite',
    'vite-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/rquanx/rollup-plugin-sp-rest-proxy',
    npm: 'https://www.npmjs.com/package/rollup-plugin-sp-rest-proxy',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
