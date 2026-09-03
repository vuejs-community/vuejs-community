import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-gettext',
  description: 'Rollup loader for PO and MO files via gettext-parser',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'gettext',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/kemdict/gettext',
    npm: 'https://www.npmjs.com/package/rollup-plugin-gettext',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
