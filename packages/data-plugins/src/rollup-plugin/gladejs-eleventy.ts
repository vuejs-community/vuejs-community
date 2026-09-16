import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gladejs/eleventy',
  description: 'The GladeJS Module adding support for Eleventy, move along ...',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'gladejs',
    'eleventy',
    'rollup-plugin',
  ],
  source: {
    github: 'gladejs/gladejs',
    npm: '@gladejs/eleventy',
  },
  links: {
    github: 'https://github.com/gladejs/gladejs',
    npm: 'https://www.npmjs.com/package/@gladejs/eleventy',
    website: 'https://gladejs.com',
  },
  stats: {
    stars: 36,
    downloads: {
      monthly: 32,
      weekly: 7,
    },
  },
})
