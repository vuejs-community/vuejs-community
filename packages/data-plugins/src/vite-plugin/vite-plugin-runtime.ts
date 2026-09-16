import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-runtime',
  description: 'Vite plugin that enables configuring runtime environment variables when building',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'flexbase',
    'flex',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'flexbase-eng/vite-plugin-runtime',
    npm: 'vite-plugin-runtime',
  },
  links: {
    github: 'https://github.com/flexbase-eng/vite-plugin-runtime',
    npm: 'https://www.npmjs.com/package/vite-plugin-runtime',
    website: 'https://github.com/flexbase-eng/vite-plugin-runtime#readme',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 37909,
      weekly: 7216,
    },
  },
})
