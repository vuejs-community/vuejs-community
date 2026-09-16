import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-generate',
  description: 'Generate files on the fly with Rollup.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  source: {
    npm: 'rollup-plugin-generate',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-generate',
    website: 'https://github.com/sadan4/rollup-plugin-generate',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 52,
      weekly: 2,
    },
  },
})
