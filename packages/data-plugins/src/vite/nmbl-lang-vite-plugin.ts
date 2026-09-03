import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nmbl-lang/vite-plugin',
  description: 'Vite plugin for .nmbl files and <template lang="nmbl"> in Vue SFCs',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'nmbl',
    'template',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/theoephraim/nmbl',
    npm: 'https://www.npmjs.com/package/@nmbl-lang/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 167,
      weekly: 4,
    },
  },
})
