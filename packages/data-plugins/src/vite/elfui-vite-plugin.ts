import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@elfui/vite-plugin',
  description: 'Vite plugin for compiling ElfUI macro components.',
  version: '0.1.0-beta.3',
  category: 'plugin',
  tags: [
    'elfui',
    'vite',
    'vite-plugin',
    'macro-components',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/bloom-lmh/elfui',
    npm: 'https://www.npmjs.com/package/@elfui/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 404,
      weekly: 30,
    },
  },
})
