import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-abbrlink',
  description: '> A Vite plugin to generate unique abbreviated links for Markdown files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-abbrlink',
    'abbrlink',
    'astro',
  ],
  source: {
    npm: 'vite-plugin-abbrlink',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-abbrlink',
    website: 'https://github.com/tangerball/abbrlink/tree/master/packages/vite-plugin-abbrlink#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 4,
    },
  },
})
