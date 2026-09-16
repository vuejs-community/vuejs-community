import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'env-manage-plugin',
  description: 'A dev env plugin that integrates an Express server with request proxying capabilities.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'proxy',
    'devServer',
    'Development environment management',
    'webpack-plugin',
    'rollup-plugin',
    'vite-plugin',
  ],
  source: {
    github: 'lumos934/env-plugin',
    npm: 'env-manage-plugin',
  },
  links: {
    github: 'https://github.com/lumos934/env-plugin',
    npm: 'https://www.npmjs.com/package/env-manage-plugin',
    website: 'https://github.com/lumos934/env-plugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 65,
      weekly: 11,
    },
  },
})
