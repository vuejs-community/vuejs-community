import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-resolve-as',
  description: 'Some processing logic depends on special file names, so...',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'resolve',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/wmzy/rollup-plugin-resolve-as',
    npm: 'https://www.npmjs.com/package/rollup-plugin-resolve-as',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
