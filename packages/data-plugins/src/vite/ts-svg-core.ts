import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ts-svg/core',
  description: 'Vite Plugin for loading all svg files inside a folder with types.',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'svg',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/chunnamwong/ts-svg',
    npm: 'https://www.npmjs.com/package/@ts-svg/core',
  },
  stats: {
    downloads: {
      monthly: 251,
      weekly: 23,
    },
  },
})
