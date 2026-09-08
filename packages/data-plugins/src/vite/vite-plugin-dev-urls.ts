import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dev-urls',
  description: 'Display custom development URLs in Vite after the dev server starts.',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'transomdesign/vite-plugin-dev-urls',
    npm: 'vite-plugin-dev-urls',
  },
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
