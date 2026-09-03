import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@postview/vite-plugin',
  description: 'Stamp JSX host elements with source coordinates so Postview comments resolve to an exact file:line.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'postview',
    'vite-plugin',
    'babel-plugin',
    'jsx',
    'source-maps',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@postview/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
