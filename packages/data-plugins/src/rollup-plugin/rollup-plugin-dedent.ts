import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dedent',
  description: 'A Rollup plugin to dedent multi-line string during build time',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'dedent',
  ],
  source: {
    github: 'LucasOe/rollup-plugin-dedent',
    npm: 'rollup-plugin-dedent',
  },
  links: {
    github: 'https://github.com/LucasOe/rollup-plugin-dedent',
    npm: 'https://www.npmjs.com/package/rollup-plugin-dedent',
    website: 'https://github.com/LucasOe/rollup-plugin-dedent#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
