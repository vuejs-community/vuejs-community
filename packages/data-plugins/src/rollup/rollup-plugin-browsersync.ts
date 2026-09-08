import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-browsersync',
  description: 'Serve your rolled up bundle via browsersync',
  icon: 'logos:rollupjs',
  version: '1.3.3',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'browsersync',
    'dev-server',
    'static',
    'serve',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: '4lejandrito/rollup-plugin-browsersync',
    npm: 'rollup-plugin-browsersync',
  },
  links: {
    github: 'https://github.com/4lejandrito/rollup-plugin-browsersync',
    npm: 'https://www.npmjs.com/package/rollup-plugin-browsersync',
  },
  stats: {
    downloads: {
      monthly: 7287,
      weekly: 1921,
    },
  },
})
