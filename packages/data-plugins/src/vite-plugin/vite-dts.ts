import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-dts',
  description: 'Blazing fast .d.ts modules for libraries',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
    'types',
    'lib',
    'dts',
  ],
  source: {
    github: 'alloc/vite-dts',
    npm: 'vite-dts',
  },
  links: {
    github: 'https://github.com/alloc/vite-dts',
    npm: 'https://www.npmjs.com/package/vite-dts',
    website: 'https://github.com/alloc/vite-dts#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 5349,
      weekly: 967,
    },
  },
})
