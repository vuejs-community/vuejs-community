import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-pound-plugin',
  description: 'Get rid of those pesky $ signs in your template strings! Replace them with the good old british £',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/penalosa/rollup-pound-plugin',
    npm: 'https://www.npmjs.com/package/rollup-pound-plugin',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
