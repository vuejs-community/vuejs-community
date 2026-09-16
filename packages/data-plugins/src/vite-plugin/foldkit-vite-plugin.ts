import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@foldkit/vite-plugin',
  description: 'Vite plugin for Foldkit with state-preserving live reload',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'foldkit',
    'live-reload',
    'state-preservation',
  ],
  source: {
    github: 'foldkit/foldkit',
    npm: '@foldkit/vite-plugin',
  },
  links: {
    github: 'https://github.com/foldkit/foldkit',
    npm: 'https://www.npmjs.com/package/@foldkit/vite-plugin',
    website: 'https://github.com/foldkit/foldkit#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 58906,
      weekly: 14648,
    },
  },
})
