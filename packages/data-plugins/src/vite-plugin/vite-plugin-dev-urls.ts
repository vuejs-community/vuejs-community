import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dev-urls',
  description: 'Display custom development URLs in Vite after the dev server starts.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'dev-server',
    'urls',
  ],
  source: {
    github: 'transomdesign/vite-plugin-dev-urls',
    npm: 'vite-plugin-dev-urls',
  },
  links: {
    github: 'https://github.com/transomdesign/vite-plugin-dev-urls',
    npm: 'https://www.npmjs.com/package/vite-plugin-dev-urls',
    website: 'https://github.com/transomdesign/vite-plugin-dev-urls#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
