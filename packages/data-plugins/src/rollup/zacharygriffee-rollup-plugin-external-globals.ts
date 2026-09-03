import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@zacharygriffee/rollup-plugin-external-globals',
  description: 'Transform external imports into global variables like output.globals.',
  version: '0.0.6',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'es',
    'transform',
    'external',
    'globals',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@zacharygriffee/rollup-plugin-external-globals',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 10,
    },
  },
})
