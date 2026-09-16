import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-ssinc',
  description: 'The plugin for including SSI-like includes in Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-ssinc',
    'ssi',
  ],
  source: {
    github: 'yend724/vite-plugin-ssinc',
    npm: 'vite-plugin-ssinc',
  },
  links: {
    github: 'https://github.com/yend724/vite-plugin-ssinc',
    npm: 'https://www.npmjs.com/package/vite-plugin-ssinc',
    website: 'https://github.com/yend724/vite-plugin-ssinc#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 96,
      weekly: 21,
    },
  },
})
