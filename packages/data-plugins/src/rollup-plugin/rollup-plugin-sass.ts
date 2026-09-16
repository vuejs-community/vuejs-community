import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-sass',
  description: 'Rollup Sass files.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'sass',
  ],
  source: {
    github: 'elycruz/rollup-plugin-sass',
    npm: 'rollup-plugin-sass',
  },
  links: {
    github: 'https://github.com/elycruz/rollup-plugin-sass',
    npm: 'https://www.npmjs.com/package/rollup-plugin-sass',
    website: 'https://github.com/elycruz/rollup-plugin-sass#readme',
  },
  stats: {
    stars: 96,
    downloads: {
      monthly: 143000,
      weekly: 28321,
    },
  },
})
