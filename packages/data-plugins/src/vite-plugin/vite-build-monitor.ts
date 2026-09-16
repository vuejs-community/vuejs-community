import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-build-monitor',
  description: 'A Vite plugin to monitor heap and RSS memory usage during build.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'BINGWU2003/vite-build-monitor',
    npm: 'vite-build-monitor',
  },
  links: {
    github: 'https://github.com/BINGWU2003/vite-build-monitor',
    npm: 'https://www.npmjs.com/package/vite-build-monitor',
    website: 'https://github.com/BINGWU2003/vite-build-monitor#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
