import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kanjianmusic/vite-plugin-copy-edit',
  description: 'A Vite plugin for inline copy-edit collection on preview websites.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'copy-edit',
    'runtime',
  ],
  source: {
    github: 'SeeMusic/vite-plugin-copy-edit',
    npm: '@kanjianmusic/vite-plugin-copy-edit',
  },
  links: {
    github: 'https://github.com/SeeMusic/vite-plugin-copy-edit',
    npm: 'https://www.npmjs.com/package/@kanjianmusic/vite-plugin-copy-edit',
    website: 'https://github.com/SeeMusic/vite-plugin-copy-edit#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
