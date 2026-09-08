import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-livereload-client',
  description: 'Add the LiveReload client for use during development',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'wlindner/rollup-plugin-livereload-client',
    npm: 'rollup-plugin-livereload-client',
  },
  links: {
    github: 'https://github.com/wlindner/rollup-plugin-livereload-client',
    npm: 'https://www.npmjs.com/package/rollup-plugin-livereload-client',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 4,
    },
  },
})
