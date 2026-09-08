import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dedent',
  description: 'A Rollup plugin to dedent multi-line string during build time',
  icon: 'logos:rollupjs',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'dedent',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'LucasOe/rollup-plugin-dedent',
    npm: 'rollup-plugin-dedent',
  },
  links: {
    github: 'https://github.com/LucasOe/rollup-plugin-dedent',
    npm: 'https://www.npmjs.com/package/rollup-plugin-dedent',
  },
  stats: {
    downloads: {
      monthly: 2,
      weekly: 1,
    },
  },
})
