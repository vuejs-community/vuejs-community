import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'typecomposer-cli',
  description: 'TypeComposer CLI tool',
  version: '0.0.7',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'framework',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/zico15/typecomposer-cli',
    npm: 'https://www.npmjs.com/package/typecomposer-cli',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
