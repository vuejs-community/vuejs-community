import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-stylint',
  description: 'Lint all your entry stylus files with stylint',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'stylus',
    'stylint',
    'lint',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'sandark7/rollup-plugin-stylint',
    npm: 'rollup-plugin-stylint',
  },
  links: {
    github: 'https://github.com/sandark7/rollup-plugin-stylint',
    npm: 'https://www.npmjs.com/package/rollup-plugin-stylint',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
