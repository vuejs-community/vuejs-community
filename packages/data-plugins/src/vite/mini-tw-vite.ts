import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'mini-tw-vite',
  description: 'Vite plugin for mini-tw — virtual CSS module with on-demand class generation. Scans source files, generates only used utility classes, supports HMR.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'css',
    'utility',
    'tailwind',
    'vite',
    'vite-plugin',
    'utility-first',
    'css-framework',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/63200475/mini-tw',
    npm: 'https://www.npmjs.com/package/mini-tw-vite',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 1,
    },
  },
})
