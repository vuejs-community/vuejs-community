import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tishlang/vite-plugin-tish',
  description: 'Vite plugin for Tish: in-graph .tish compilation with HMR and source maps for dev.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'tish',
    'vite',
    'vite-plugin',
    'hmr',
    'lattish',
  ],
  source: {
    github: 'tishlang/tish',
    npm: '@tishlang/vite-plugin-tish',
  },
  links: {
    github: 'https://github.com/tishlang/tish',
    npm: 'https://www.npmjs.com/package/@tishlang/vite-plugin-tish',
    website: 'https://github.com/tishlang/tish#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1810,
      weekly: 156,
    },
  },
})
