import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-format',
  description: 'Format code and assets using Prettier',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'prettier',
    'prettify',
    'pretty',
    'beautify',
    'format',
  ],
  links: {
    github: 'https://github.com/bent10/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-format',
    website: 'https://github.com/bent10/vite-plugins/tree/main/packages/plugin-format',
  },
  source: {
    github: 'bent10/vite-plugins',
    npm: 'vite-plugin-format',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
