import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compelem-strip-comments',
  description: 'Vite plugin that strips HTML comments inside compelem h`` templates from TS/TSX sources at compile time.',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'holyhigh2/compelem-extension',
    npm: 'vite-plugin-compelem-strip-comments',
  },
  links: {
    github: 'https://github.com/holyhigh2/compelem-extension',
    npm: 'https://www.npmjs.com/package/vite-plugin-compelem-strip-comments',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 11,
    },
  },
})
