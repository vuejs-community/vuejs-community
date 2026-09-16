import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-browsersync',
  description: 'Serve your rolled up bundle via browsersync',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'browsersync',
    'dev-server',
    'static',
    'serve',
  ],
  source: {
    github: '4lejandrito/rollup-plugin-browsersync',
    npm: 'rollup-plugin-browsersync',
  },
  links: {
    github: 'https://github.com/4lejandrito/rollup-plugin-browsersync',
    npm: 'https://www.npmjs.com/package/rollup-plugin-browsersync',
    website: 'https://github.com/4lejandrito/rollup-plugin-browsersync',
  },
  stats: {
    stars: 19,
    downloads: {
      monthly: 6951,
      weekly: 1460,
    },
  },
})
