import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-linaria',
  description: 'A plugin for vite to serve and build linaria using linaria babel',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'linaria',
    'css',
    'vite-plugin',
  ],
  source: {
    github: 'denn1s/vite-plugin-linaria',
    npm: 'vite-plugin-linaria',
  },
  links: {
    github: 'https://github.com/denn1s/vite-plugin-linaria',
    npm: 'https://www.npmjs.com/package/vite-plugin-linaria',
    website: 'https://github.com/denn1s/vite-plugin-linaria/tree/master/#readme',
  },
  stats: {
    stars: 29,
    downloads: {
      monthly: 540,
      weekly: 112,
    },
  },
})
