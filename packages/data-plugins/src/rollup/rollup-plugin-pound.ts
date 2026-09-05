import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-pound',
  description: 'Get rid of those pesky $ signs in your template strings! Replace them with the good old british £, or any other currency symbol!',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/penalosa/rollup-plugin-pound',
    npm: 'https://www.npmjs.com/package/rollup-plugin-pound',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
