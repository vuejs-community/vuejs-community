import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compelem-strip-comments',
  description: 'Vite plugin that strips HTML comments inside compelem h`` templates from TS/TSX sources at compile time.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'compelem',
    'html',
    'comments',
    'strip',
    'web-components',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/holyhigh2/compelem-extension',
    npm: 'https://www.npmjs.com/package/vite-plugin-compelem-strip-comments',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
