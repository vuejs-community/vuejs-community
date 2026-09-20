import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-pound-plugin',
  description: 'Get rid of those pesky $ signs in your template strings! Replace them with the good old british £',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/penalosa/rollup-pound-plugin',
    npm: 'https://www.npmjs.com/package/rollup-pound-plugin',
    website: 'https://github.com/penalosa/rollup-pound-plugin',
  },
  source: {
    github: 'penalosa/rollup-pound-plugin',
    npm: 'rollup-pound-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 5,
    },
  },
})
