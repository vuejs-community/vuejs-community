import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@postview/vite-plugin',
  description: 'Stamp JSX host elements with source coordinates so Postview comments resolve to an exact file:line.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'postview',
    'vite-plugin',
    'babel-plugin',
    'jsx',
    'source-maps',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@postview/vite-plugin',
    website: 'https://postview.dev',
  },
  source: {
    npm: '@postview/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 1,
    },
  },
})
