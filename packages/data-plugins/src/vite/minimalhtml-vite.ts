import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@minimalhtml/vite',
  description: 'Vite plugin for MinimalHtml: marker-based asset discovery, manifest + importmap emission',
  version: '0.0.1-alpha.14',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'minimalhtml',
    'aspnetcore',
    'manifest',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/flixcor/minimalhtml',
    npm: 'https://www.npmjs.com/package/@minimalhtml/vite',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 11,
    },
  },
})
