import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-stylint',
  description: 'Lint all your entry stylus files with stylint',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'stylus',
    'stylint',
    'lint',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/sandark7/rollup-plugin-stylint',
    npm: 'https://www.npmjs.com/package/rollup-plugin-stylint',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
