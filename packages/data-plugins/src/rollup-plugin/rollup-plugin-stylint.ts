import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-stylint',
  description: 'Lint all your entry stylus files with stylint',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'stylus',
    'stylint',
    'lint',
  ],
  links: {
    github: 'https://github.com/sandark7/rollup-plugin-stylint',
    npm: 'https://www.npmjs.com/package/rollup-plugin-stylint',
    website: 'https://github.com/sandark7/rollup-plugin-stylint#readme',
  },
  source: {
    github: 'sandark7/rollup-plugin-stylint',
    npm: 'rollup-plugin-stylint',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
