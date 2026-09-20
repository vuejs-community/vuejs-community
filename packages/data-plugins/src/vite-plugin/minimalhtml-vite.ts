import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@minimalhtml/vite',
  description: 'Vite plugin for MinimalHtml: marker-based asset discovery, manifest + importmap emission',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'minimalhtml',
    'aspnetcore',
    'manifest',
  ],
  links: {
    github: 'https://github.com/flixcor/minimalhtml',
    npm: 'https://www.npmjs.com/package/@minimalhtml/vite',
    website: 'https://github.com/flixcor/minimalhtml/tree/main/npm/vite',
  },
  source: {
    github: 'flixcor/minimalhtml',
    npm: '@minimalhtml/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 29,
      weekly: 2,
    },
  },
})
