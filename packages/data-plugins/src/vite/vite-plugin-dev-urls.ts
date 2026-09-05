import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dev-urls',
  description: 'Display custom development URLs in Vite after the dev server starts.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'dev-server',
    'urls',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/transomdesign/vite-plugin-dev-urls',
    npm: 'https://www.npmjs.com/package/vite-plugin-dev-urls',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 0,
    },
  },
})
