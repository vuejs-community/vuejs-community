import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@tishlang/vite-plugin-tish',
  description: 'Vite plugin for Tish: in-graph .tish compilation with HMR and source maps for dev.',
  version: '3.10.11',
  category: 'plugin',
  tags: [
    'tish',
    'vite',
    'vite-plugin',
    'hmr',
    'lattish',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/tishlang/tish',
    npm: 'https://www.npmjs.com/package/@tishlang/vite-plugin-tish',
  },
  stats: {
    downloads: {
      monthly: 2306,
      weekly: 814,
    },
  },
})
