import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rexxars/vite-dts',
  description: 'Blazing fast .d.ts modules for libraries',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
    'types',
    'lib',
    'dts',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/alloc/vite-dts',
    npm: 'https://www.npmjs.com/package/@rexxars/vite-dts',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 5,
    },
  },
})
