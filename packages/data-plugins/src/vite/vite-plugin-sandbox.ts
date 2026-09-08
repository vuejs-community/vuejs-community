import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sandbox',
  description: 'Vite plugin for JavaScript runtime isolation via proxy sandbox',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'zhanghongen/vite-plugin-sandbox',
    npm: 'vite-plugin-sandbox',
  },
  links: {
    github: 'https://github.com/zhanghongen/vite-plugin-sandbox',
    npm: 'https://www.npmjs.com/package/vite-plugin-sandbox',
  },
  stats: {
    downloads: {
      monthly: 75,
      weekly: 11,
    },
  },
})
