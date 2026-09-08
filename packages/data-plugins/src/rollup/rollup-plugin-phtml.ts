import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-phtml',
  description: 'Use pHTML with Rollup',
  icon: 'logos:rollupjs',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'html',
    'phtml',
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'phtmlorg/rollup-plugin-phtml',
    npm: 'rollup-plugin-phtml',
  },
  links: {
    github: 'https://github.com/phtmlorg/rollup-plugin-phtml',
    npm: 'https://www.npmjs.com/package/rollup-plugin-phtml',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 4,
    },
  },
})
