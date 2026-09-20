import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-phtml',
  description: 'Use pHTML with Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'html',
    'phtml',
    'rollup',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/phtmlorg/rollup-plugin-phtml',
    npm: 'https://www.npmjs.com/package/rollup-plugin-phtml',
    website: 'https://github.com/phtmlorg/rollup-plugin-phtml#readme',
  },
  source: {
    github: 'phtmlorg/rollup-plugin-phtml',
    npm: 'rollup-plugin-phtml',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
