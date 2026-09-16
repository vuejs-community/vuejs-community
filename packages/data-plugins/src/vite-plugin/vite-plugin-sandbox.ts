import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-sandbox',
  description: 'Vite plugin for JavaScript runtime isolation via proxy sandbox',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'zhanghongen/vite-plugin-sandbox',
    npm: 'vite-plugin-sandbox',
  },
  links: {
    github: 'https://github.com/zhanghongen/vite-plugin-sandbox',
    npm: 'https://www.npmjs.com/package/vite-plugin-sandbox',
    website: 'https://github.com/zhanghongen/vite-plugin-sandbox#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 58,
      weekly: 1,
    },
  },
})
