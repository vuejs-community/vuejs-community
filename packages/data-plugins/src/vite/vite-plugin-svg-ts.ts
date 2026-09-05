import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svg-ts',
  description: 'Vite Plugin for loading all svg files inside a folder with types.',
  version: '0.0.7',
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
    github: 'https://github.com/chunnamwong/vite-plugin-svg-ts',
    npm: 'https://www.npmjs.com/package/vite-plugin-svg-ts',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 5,
    },
  },
})
