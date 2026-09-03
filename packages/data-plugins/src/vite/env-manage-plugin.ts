import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'env-manage-plugin',
  description: 'A dev env plugin that integrates an Express server with request proxying capabilities.',
  version: '0.5.7',
  category: 'plugin',
  tags: [
    'proxy',
    'devServer',
    'Development environment management',
    'webpack-plugin',
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/lumos934/env-plugin',
    npm: 'https://www.npmjs.com/package/env-manage-plugin',
  },
  stats: {
    downloads: {
      monthly: 113,
      weekly: 21,
    },
  },
})
