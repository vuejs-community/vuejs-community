import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-conditional-import',
  description: 'A Rollup plugin that allows you to conditionally import modules (CJS) based on environment variable',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'conditional',
    'import',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/vinny-silveira/rollup-plugin-conditional-import',
    npm: 'https://www.npmjs.com/package/rollup-plugin-conditional-import',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 12,
    },
  },
})
