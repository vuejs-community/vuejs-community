import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-block',
  description: 'Ensure certain files don\'t become part of the build.',
  version: '1.0.6',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'rollup',
    'block',
    'import',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/tjenkinson/rollup-plugin-block',
    npm: 'https://www.npmjs.com/package/rollup-plugin-block',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 1,
    },
  },
})
