import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@gladejs/rollup',
  description: 'The GladeJS Module adding support for Rollup, move along ...',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'marko',
    'gladejs',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/gladejs/gladejs',
    npm: 'https://www.npmjs.com/package/@gladejs/rollup',
    website: 'https://gladejs.com',
  },
  source: {
    github: 'gladejs/gladejs',
    npm: '@gladejs/rollup',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 41,
      weekly: 3,
    },
  },
})
