import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-sp-rest-proxy',
  description: '[Rollup](https://rollupjs.org) / [Vite](https://vitejs.dev) plugin that wires [sp-rest-proxy](https://github.com/koltyakov/sp-rest-proxy) into the dev server so SharePoint REST calls resolve locally while you build.',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'rquanx/rollup-plugin-sp-rest-proxy',
    npm: 'rollup-plugin-sp-rest-proxy',
  },
  links: {
    github: 'https://github.com/rquanx/rollup-plugin-sp-rest-proxy',
    npm: 'https://www.npmjs.com/package/rollup-plugin-sp-rest-proxy',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
