import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-file-line-placeholder-plugin',
  description: 'Vite plugin that replaces $FL$ placeholders with source file coordinates',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'plugin',
    'placeholder',
    'typescript',
  ],
  source: {
    github: 'freewind/vite-file-line-placeholder-plugin',
    npm: 'vite-file-line-placeholder-plugin',
  },
  links: {
    github: 'https://github.com/freewind/vite-file-line-placeholder-plugin',
    npm: 'https://www.npmjs.com/package/vite-file-line-placeholder-plugin',
    website: 'https://github.com/freewind/vite-file-line-placeholder-plugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 73,
      weekly: 16,
    },
  },
})
