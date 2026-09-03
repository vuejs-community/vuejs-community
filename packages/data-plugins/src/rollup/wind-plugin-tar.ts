import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'wind-plugin-tar',
  description: 'Tar the result files after building',
  version: '0.9.10',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'rollup-plugin',
    'webpack-plugin',
    'vue',
    'tar',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/WindWilliam/wind-plugin-tar',
    npm: 'https://www.npmjs.com/package/wind-plugin-tar',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 0,
    },
  },
})
