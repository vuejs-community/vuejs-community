import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ignore',
  description: 'Ignore a module in rollup.js',
  icon: 'logos:rollupjs',
  version: '1.0.10',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'proteriax/rollup-plugin-ignore',
    npm: 'rollup-plugin-ignore',
  },
  links: {
    github: 'https://github.com/proteriax/rollup-plugin-ignore',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ignore',
  },
  stats: {
    downloads: {
      monthly: 159097,
      weekly: 36355,
    },
  },
})
