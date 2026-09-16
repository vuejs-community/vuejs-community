import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@unterberg/vite-beasties-output',
  description: 'Post-build vite plugin that runs beasties against already generated HTML output.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vike',
    'beasties',
    'critical-css',
    'ssg',
  ],
  source: {
    npm: '@unterberg/vite-beasties-output',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@unterberg/vite-beasties-output',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 119,
      weekly: 31,
    },
  },
})
