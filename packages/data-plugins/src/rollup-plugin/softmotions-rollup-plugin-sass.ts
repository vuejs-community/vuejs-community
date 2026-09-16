import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@softmotions/rollup-plugin-sass',
  description: 'Rollup .sass files.',
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
    github: 'differui/rollup-plugin-sass',
    npm: '@softmotions/rollup-plugin-sass',
  },
  links: {
    github: 'https://github.com/differui/rollup-plugin-sass',
    npm: 'https://www.npmjs.com/package/@softmotions/rollup-plugin-sass',
    website: 'https://github.com/differui/rollup-plugin-sass#readme',
  },
  stats: {
    stars: 96,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
