import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ignore',
  description: 'Ignore a module in rollup.js',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  source: {
    github: 'proteriax/rollup-plugin-ignore',
    npm: 'rollup-plugin-ignore',
  },
  links: {
    github: 'https://github.com/proteriax/rollup-plugin-ignore',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ignore',
    website: 'https://github.com/proteriax/rollup-plugin-ignore#readme',
  },
  stats: {
    stars: 28,
    downloads: {
      monthly: 157784,
      weekly: 31063,
    },
  },
})
