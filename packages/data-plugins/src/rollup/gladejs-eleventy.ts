import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@gladejs/eleventy',
  description: 'The GladeJS Module adding support for Eleventy, move along ...',
  version: '0.7.1',
  category: 'plugin',
  tags: [
    'gladejs',
    'eleventy',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/gladejs/gladejs',
    npm: 'https://www.npmjs.com/package/@gladejs/eleventy',
  },
  stats: {
    downloads: {
      monthly: 33,
      weekly: 4,
    },
  },
})
