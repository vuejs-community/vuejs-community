import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bundle-size-tracker',
  description: 'A Vite plugin that tracks bundle sizes and compares with historical averages',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/vinayjampana/vite-plugin-bundle-size-tracker',
    npm: 'https://www.npmjs.com/package/vite-plugin-bundle-size-tracker',
    website: 'https://github.com/vinayjampana/vite-plugin-bundle-size-tracker#readme',
  },
  source: {
    github: 'vinayjampana/vite-plugin-bundle-size-tracker',
    npm: 'vite-plugin-bundle-size-tracker',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
