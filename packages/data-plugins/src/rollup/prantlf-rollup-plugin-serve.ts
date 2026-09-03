import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@prantlf/rollup-plugin-serve',
  description: 'Rollup plugin to serve the bundle and other files in the project directory.',
  version: '3.2.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'serve',
    'dev-server',
    'static',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/prantlf/rollup-plugin-serve',
    npm: 'https://www.npmjs.com/package/@prantlf/rollup-plugin-serve',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
