import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pyrologic/rollup-plugin',
  description: 'A simple yet useful rollup.js plugin',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'plugin',
  ],
  source: {
    github: 'pyrologic/devtools',
    npm: '@pyrologic/rollup-plugin',
  },
  links: {
    github: 'https://github.com/pyrologic/devtools',
    npm: 'https://www.npmjs.com/package/@pyrologic/rollup-plugin',
    website: 'https://github.com/pyrologic/devtools/tree/main/rollup-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 1,
    },
  },
})
