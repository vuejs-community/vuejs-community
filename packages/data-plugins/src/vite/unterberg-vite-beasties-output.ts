import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@unterberg/vite-beasties-output',
  description: 'Post-build vite plugin that runs beasties against already generated HTML output.',
  version: '0.1.16',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vike',
    'beasties',
    'critical-css',
    'ssg',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@unterberg/vite-beasties-output',
  },
  stats: {
    downloads: {
      monthly: 167,
      weekly: 8,
    },
  },
})
