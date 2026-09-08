import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-retrying-dynamic-import',
  description: 'retrying dynamic import',
  icon: 'logos:vite-icon',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'dynamic import',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'cj0x39e/retrying-dynamic-import',
    npm: 'vite-plugin-retrying-dynamic-import',
  },
  links: {
    github: 'https://github.com/cj0x39e/retrying-dynamic-import',
    npm: 'https://www.npmjs.com/package/vite-plugin-retrying-dynamic-import',
  },
  stats: {
    downloads: {
      monthly: 163,
      weekly: 23,
    },
  },
})
