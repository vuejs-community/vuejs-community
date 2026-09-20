import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-inline',
  description: 'Inline raw TypeScript code as a string',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'inline',
    'static-assets',
    'typescript',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yjl9903/vite-plugin-inline',
    npm: 'https://www.npmjs.com/package/vite-plugin-inline',
    website: 'https://github.com/yjl9903/vite-plugin-inline#readme',
  },
  source: {
    github: 'yjl9903/vite-plugin-inline',
    npm: 'vite-plugin-inline',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 142,
      weekly: 35,
    },
  },
})
