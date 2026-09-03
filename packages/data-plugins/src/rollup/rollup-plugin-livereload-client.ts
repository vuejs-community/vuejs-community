import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-livereload-client',
  description: 'Add the LiveReload client for use during development',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'livereload',
    'lr',
    'frontend',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/wlindner/rollup-plugin-livereload-client',
    npm: 'https://www.npmjs.com/package/rollup-plugin-livereload-client',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 3,
    },
  },
})
