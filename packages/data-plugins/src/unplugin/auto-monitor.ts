import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'auto-monitor',
  description: 'Register global imports on demand for Vite and Webpack',
  version: '1.1.2',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/wulinsheng123/auto-monitor',
    npm: 'https://www.npmjs.com/package/auto-monitor',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 3,
    },
  },
})
