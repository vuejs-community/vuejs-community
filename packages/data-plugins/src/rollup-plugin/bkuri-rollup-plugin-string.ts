import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@bkuri/rollup-plugin-string',
  description: 'Converts text files to modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'stringify',
    'string',
    'template',
  ],
  source: {
    github: 'bkuri/rollup-plugin-string',
    npm: '@bkuri/rollup-plugin-string',
  },
  links: {
    github: 'https://github.com/bkuri/rollup-plugin-string',
    npm: 'https://www.npmjs.com/package/@bkuri/rollup-plugin-string',
    website: 'https://github.com/bkuri/rollup-plugin-string',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 124,
      weekly: 24,
    },
  },
})
