import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-bower-resolve',
  description: 'Use the bower resolution algorithm with Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'bower',
  ],
  links: {
    github: 'https://github.com/mjeanroy/rollup-plugin-bower-resolve',
    npm: 'https://www.npmjs.com/package/rollup-plugin-bower-resolve',
    website: 'https://github.com/mjeanroy/rollup-plugin-bower-resolve#readme',
  },
  source: {
    github: 'mjeanroy/rollup-plugin-bower-resolve',
    npm: 'rollup-plugin-bower-resolve',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 45,
      weekly: 26,
    },
  },
})
