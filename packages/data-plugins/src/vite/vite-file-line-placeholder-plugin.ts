import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-file-line-placeholder-plugin',
  description: 'Vite plugin that replaces $FL$ placeholders with source file coordinates',
  version: '0.2.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'plugin',
    'placeholder',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/freewind/vite-file-line-placeholder-plugin',
    npm: 'https://www.npmjs.com/package/vite-file-line-placeholder-plugin',
  },
  stats: {
    downloads: {
      monthly: 85,
      weekly: 43,
    },
  },
})
