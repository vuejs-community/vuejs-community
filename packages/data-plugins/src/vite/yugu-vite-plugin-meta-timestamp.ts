import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@yugu/vite-plugin-meta-timestamp',
  description: 'Inject a human-readable build timestamp meta tag into Vite HTML output.',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'meta',
    'timestamp',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@yugu/vite-plugin-meta-timestamp',
  },
  stats: {
    downloads: {
      monthly: 39,
      weekly: 14,
    },
  },
})
