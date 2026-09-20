import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'mini-tw-vite',
  description: 'Vite plugin for mini-tw — virtual CSS module with on-demand class generation. Scans source files, generates only used utility classes, supports HMR.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'css',
    'utility',
    'tailwind',
    'vite',
    'vite-plugin',
    'utility-first',
    'css-framework',
  ],
  links: {
    github: 'https://github.com/63200475/mini-tw',
    npm: 'https://www.npmjs.com/package/mini-tw-vite',
    website: 'https://github.com/63200475/mini-tw#readme',
  },
  source: {
    github: '63200475/mini-tw',
    npm: 'mini-tw-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
