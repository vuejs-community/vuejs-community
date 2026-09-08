import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-inline',
  description: 'Inline raw TypeScript code as a string',
  icon: 'logos:vite-icon',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'inline',
    'static-assets',
    'typescript',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'yjl9903/vite-plugin-inline',
    npm: 'vite-plugin-inline',
  },
  links: {
    github: 'https://github.com/yjl9903/vite-plugin-inline',
    npm: 'https://www.npmjs.com/package/vite-plugin-inline',
  },
  stats: {
    downloads: {
      monthly: 155,
      weekly: 18,
    },
  },
})
