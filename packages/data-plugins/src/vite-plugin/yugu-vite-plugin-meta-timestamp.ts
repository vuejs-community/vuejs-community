import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@yugu/vite-plugin-meta-timestamp',
  description: 'Inject a human-readable build timestamp meta tag into Vite HTML output.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'meta',
    'timestamp',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@yugu/vite-plugin-meta-timestamp',
  },
  source: {
    npm: '@yugu/vite-plugin-meta-timestamp',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 57,
      weekly: 6,
    },
  },
})
