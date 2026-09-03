import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-data-files',
  description: 'Bundle web workers that work in nodejs and the browser, without a separate build target.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/brandonocasey/rollup-plugin-data-files',
    npm: 'https://www.npmjs.com/package/rollup-plugin-data-files',
  },
  stats: {
    downloads: {
      monthly: 351,
      weekly: 80,
    },
  },
})
