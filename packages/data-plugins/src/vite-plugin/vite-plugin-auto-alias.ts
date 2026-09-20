import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-alias',
  description: 'automatically generate alias based on path',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'alias',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-alias',
    website: 'https://github.com/jwyGithub/vite-plugin-auto-alias',
  },
  source: {
    npm: 'vite-plugin-auto-alias',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2808,
      weekly: 705,
    },
  },
})
