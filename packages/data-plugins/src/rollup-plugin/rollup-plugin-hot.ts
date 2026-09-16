import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-hot',
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
  source: {
    github: 'rixo/rollup-plugin-hot',
    npm: 'rollup-plugin-hot',
  },
  links: {
    github: 'https://github.com/rixo/rollup-plugin-hot',
    npm: 'https://www.npmjs.com/package/rollup-plugin-hot',
    website: 'https://github.com/rixo/rollup-plugin-hot',
  },
  stats: {
    stars: 50,
    downloads: {
      monthly: 1324,
      weekly: 211,
    },
  },
})
