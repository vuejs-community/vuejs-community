import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-resolve-as',
  description: 'Some processing logic depends on special file names, so...',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'resolve',
  ],
  source: {
    github: 'wmzy/rollup-plugin-resolve-as',
    npm: 'rollup-plugin-resolve-as',
  },
  links: {
    github: 'https://github.com/wmzy/rollup-plugin-resolve-as',
    npm: 'https://www.npmjs.com/package/rollup-plugin-resolve-as',
    website: 'https://github.com/wmzy/rollup-plugin-resolve-as',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
