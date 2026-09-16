import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-typescript3',
  description: 'Rollup plugin for TypeScript',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'typescript',
  ],
  source: {
    github: 'mohd-akram/rollup-plugin-typescript',
    npm: 'rollup-plugin-typescript3',
  },
  links: {
    github: 'https://github.com/mohd-akram/rollup-plugin-typescript',
    npm: 'https://www.npmjs.com/package/rollup-plugin-typescript3',
    website: 'https://github.com/mohd-akram/rollup-plugin-typescript#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 130,
      weekly: 9,
    },
  },
})
