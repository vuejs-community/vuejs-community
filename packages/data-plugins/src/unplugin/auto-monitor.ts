import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'auto-monitor',
  description: 'Register global imports on demand for Vite and Webpack',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  source: {
    github: 'wulinsheng123/auto-monitor',
    npm: 'auto-monitor',
  },
  links: {
    github: 'https://github.com/wulinsheng123/auto-monitor',
    npm: 'https://www.npmjs.com/package/auto-monitor',
    website: 'https://github.com/wulinsheng123/auto-monitor#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 18,
      weekly: 9,
    },
  },
})
