import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-pound',
  description: 'Get rid of those pesky $ signs in your template strings! Replace them with the good old british £, or any other currency symbol!',
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
    github: 'penalosa/rollup-plugin-pound',
    npm: 'rollup-plugin-pound',
  },
  links: {
    github: 'https://github.com/penalosa/rollup-plugin-pound',
    npm: 'https://www.npmjs.com/package/rollup-plugin-pound',
    website: 'https://github.com/penalosa/rollup-plugin-pound',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
