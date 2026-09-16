import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ts-svg/core',
  description: 'Vite Plugin for loading all svg files inside a folder with types.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'svg',
    'typescript',
  ],
  source: {
    github: 'chunnamwong/ts-svg',
    npm: '@ts-svg/core',
  },
  links: {
    github: 'https://github.com/chunnamwong/ts-svg',
    npm: 'https://www.npmjs.com/package/@ts-svg/core',
    website: 'https://github.com/chunnamwong/ts-svg#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 160,
      weekly: 13,
    },
  },
})
