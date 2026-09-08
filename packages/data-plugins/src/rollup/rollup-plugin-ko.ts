import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ko',
  description: 'Roll .ko files',
  icon: 'logos:rollupjs',
  version: '0.4.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'ko',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'differui/rollup-plugin-ko',
    npm: 'rollup-plugin-ko',
  },
  links: {
    github: 'https://github.com/differui/rollup-plugin-ko',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ko',
  },
  stats: {
    downloads: {
      monthly: 60,
      weekly: 4,
    },
  },
})
