import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svg-ts',
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
    github: 'chunnamwong/vite-plugin-svg-ts',
    npm: 'vite-plugin-svg-ts',
  },
  links: {
    github: 'https://github.com/chunnamwong/vite-plugin-svg-ts',
    npm: 'https://www.npmjs.com/package/vite-plugin-svg-ts',
    website: 'https://github.com/chunnamwong/vite-plugin-svg-ts#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 21,
      weekly: 3,
    },
  },
})
