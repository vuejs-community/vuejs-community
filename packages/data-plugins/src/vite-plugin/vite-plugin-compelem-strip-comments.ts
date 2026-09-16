import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-compelem-strip-comments',
  description: 'Vite plugin that strips HTML comments inside compelem h`` templates from TS/TSX sources at compile time.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'compelem',
    'html',
    'comments',
    'strip',
    'web-components',
  ],
  source: {
    github: 'holyhigh2/compelem-extension',
    npm: 'vite-plugin-compelem-strip-comments',
  },
  links: {
    github: 'https://github.com/holyhigh2/compelem-extension',
    npm: 'https://www.npmjs.com/package/vite-plugin-compelem-strip-comments',
    website: 'https://github.com/holyhigh2/compelem-extension#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 9,
    },
  },
})
