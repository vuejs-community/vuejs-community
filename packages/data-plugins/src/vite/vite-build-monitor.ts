import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-build-monitor',
  description: 'A Vite plugin to monitor heap and RSS memory usage during build.',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'build',
    'memory',
    'monitor',
    'heap',
    'rss',
    'diagnostics',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/BINGWU2003/vite-build-monitor',
    npm: 'https://www.npmjs.com/package/vite-build-monitor',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 1,
    },
  },
})
