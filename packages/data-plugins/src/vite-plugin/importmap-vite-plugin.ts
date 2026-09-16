import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'importmap-vite-plugin',
  description: 'Vite plugin to generate import map JSON virtual module for sharing dependencies without duplication',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'importmap',
    'import-map',
    'esm',
    'modules',
    'dependencies',
    'module-federation',
  ],
  source: {
    github: 'remorses/importmap-vite-plugin',
    npm: 'importmap-vite-plugin',
  },
  links: {
    github: 'https://github.com/remorses/importmap-vite-plugin',
    npm: 'https://www.npmjs.com/package/importmap-vite-plugin',
    website: 'https://github.com/remorses/importmap-vite-plugin#readme',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 888,
      weekly: 58,
    },
  },
})
