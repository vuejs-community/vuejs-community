import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bundle-size-tracker',
  description: 'A Vite plugin that tracks bundle sizes and compares with historical averages',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'bundle',
    'bundle-size',
    'bundle-analyzer',
    'performance',
    'optimization',
    'build-tool',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vinayjampana/vite-plugin-bundle-size-tracker',
    npm: 'https://www.npmjs.com/package/vite-plugin-bundle-size-tracker',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 7,
    },
  },
})
