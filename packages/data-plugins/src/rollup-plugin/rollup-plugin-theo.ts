import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-theo',
  description: 'A rollup plugin to transform design tokens using Theo',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    github: 'limitlessloop/rollup-plugin-theo',
    npm: 'rollup-plugin-theo',
  },
  links: {
    github: 'https://github.com/limitlessloop/rollup-plugin-theo',
    npm: 'https://www.npmjs.com/package/rollup-plugin-theo',
    website: 'https://github.com/mindthetic/rollup-plugin-theo#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 20,
      weekly: 5,
    },
  },
})
