import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'env-plugin',
  description: 'A dev env plugin that integrates an Express server with request proxying capabilities.',
  version: '0.6.1',
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
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/lumos934/env-plugin',
    npm: 'https://www.npmjs.com/package/env-plugin',
  },
  stats: {
    downloads: {
      monthly: 206,
      weekly: 182,
    },
  },
})
