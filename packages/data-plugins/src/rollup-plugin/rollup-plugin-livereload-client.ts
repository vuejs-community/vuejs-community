import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-livereload-client',
  description: 'Add the LiveReload client for use during development',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'livereload',
    'lr',
    'frontend',
  ],
  links: {
    github: 'https://github.com/wlindner/rollup-plugin-livereload-client',
    npm: 'https://www.npmjs.com/package/rollup-plugin-livereload-client',
    website: 'https://github.com/wlindner/rollup-plugin-livereload-client',
  },
  source: {
    github: 'wlindner/rollup-plugin-livereload-client',
    npm: 'rollup-plugin-livereload-client',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
