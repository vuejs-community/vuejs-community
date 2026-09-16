import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@prantlf/rollup-plugin-serve',
  description: 'Rollup plugin to serve the bundle and other files in the project directory.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'serve',
    'dev-server',
    'static',
  ],
  source: {
    github: 'prantlf/rollup-plugin-serve',
    npm: '@prantlf/rollup-plugin-serve',
  },
  links: {
    github: 'https://github.com/prantlf/rollup-plugin-serve',
    npm: 'https://www.npmjs.com/package/@prantlf/rollup-plugin-serve',
    website: 'https://github.com/prantlf/rollup-plugin-serve',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 17,
      weekly: 1,
    },
  },
})
