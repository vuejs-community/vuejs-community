import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-retrying-dynamic-import',
  description: 'retrying dynamic import',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'dynamic import',
  ],
  source: {
    github: 'cj0x39e/retrying-dynamic-import',
    npm: 'vite-plugin-retrying-dynamic-import',
  },
  links: {
    github: 'https://github.com/cj0x39e/retrying-dynamic-import',
    npm: 'https://www.npmjs.com/package/vite-plugin-retrying-dynamic-import',
    website: 'https://github.com/cj0x39e/retrying-dynamic-import#readme',
  },
  stats: {
    stars: 19,
    downloads: {
      monthly: 116,
      weekly: 41,
    },
  },
})
