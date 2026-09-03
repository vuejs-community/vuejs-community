import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sandbox',
  description: 'Vite plugin for JavaScript runtime isolation via proxy sandbox',
  version: '2.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'sandbox',
    'proxy',
    'window-proxy',
    'runtime-isolation',
    'micro-frontend',
    'ast-transform',
    'babel',
    'rollup',
    'browser',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/zhanghongen/vite-plugin-sandbox',
    npm: 'https://www.npmjs.com/package/vite-plugin-sandbox',
  },
  stats: {
    downloads: {
      monthly: 91,
      weekly: 21,
    },
  },
})
