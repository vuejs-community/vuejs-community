import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nmbl-lang/vite-plugin',
  description: 'Vite plugin for .nmbl files and <template lang="nmbl"> in Vue SFCs',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'nmbl',
    'template',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/theoephraim/nmbl',
    npm: 'https://www.npmjs.com/package/@nmbl-lang/vite-plugin',
    website: 'https://nmbl.tools',
  },
  source: {
    github: 'theoephraim/nmbl',
    npm: '@nmbl-lang/vite-plugin',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 26,
      weekly: 3,
    },
  },
})
