import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ko',
  description: 'Roll .ko files',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'ko',
  ],
  source: {
    github: 'differui/rollup-plugin-ko',
    npm: 'rollup-plugin-ko',
  },
  links: {
    github: 'https://github.com/differui/rollup-plugin-ko',
    npm: 'https://www.npmjs.com/package/rollup-plugin-ko',
    website: 'https://github.com/differui/rollup-plugin-ko#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 3,
    },
  },
})
