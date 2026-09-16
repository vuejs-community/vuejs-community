import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-marko',
  description: 'Marko transform/plugin for Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'marko',
  ],
  source: {
    github: 'marko-js/markoify',
    npm: 'rollup-plugin-marko',
  },
  links: {
    github: 'https://github.com/marko-js/markoify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-marko',
    website: 'https://github.com/marko-js/markoify#readme',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 22,
      weekly: 3,
    },
  },
})
