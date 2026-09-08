import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-computed',
  description: 'Compute data during build time. ',
  icon: 'logos:rollupjs',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'krmax44/rollup-plugin-computed',
    npm: 'rollup-plugin-computed',
  },
  links: {
    github: 'https://github.com/krmax44/rollup-plugin-computed',
    npm: 'https://www.npmjs.com/package/rollup-plugin-computed',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 3,
    },
  },
})
