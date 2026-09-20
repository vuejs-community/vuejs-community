import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sastan/rollup-plugin-hot',
  description: '> HMR plugin for Rollup, leveraging SystemJS',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'hmr',
  ],
  links: {
    github: 'https://github.com/rixo/rollup-plugin-hot',
    npm: 'https://www.npmjs.com/package/@sastan/rollup-plugin-hot',
    website: 'https://github.com/rixo/rollup-plugin-hot',
  },
  source: {
    github: 'rixo/rollup-plugin-hot',
    npm: '@sastan/rollup-plugin-hot',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 3,
    },
  },
})
