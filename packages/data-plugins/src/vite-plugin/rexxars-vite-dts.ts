import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rexxars/vite-dts',
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
  links: {
    github: 'https://github.com/alloc/vite-dts',
    npm: 'https://www.npmjs.com/package/@rexxars/vite-dts',
    website: 'https://github.com/alloc/vite-dts#readme',
  },
  source: {
    github: 'alloc/vite-dts',
    npm: '@rexxars/vite-dts',
  },
  stats: {
    stars: 87,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
