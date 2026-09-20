import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-chunks-plugin',
  description: 'Generate per-entry HTML partials and a chunks manifest for Vite 8 builds',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'chunks',
    'entrypoints',
    'manifest',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/tyteen4a03/vite-chunks-plugin',
    npm: 'https://www.npmjs.com/package/vite-chunks-plugin',
    website: 'https://github.com/tyteen4a03/vite-chunks-plugin#readme',
  },
  source: {
    github: 'tyteen4a03/vite-chunks-plugin',
    npm: 'vite-chunks-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 6881,
      weekly: 1260,
    },
  },
})
