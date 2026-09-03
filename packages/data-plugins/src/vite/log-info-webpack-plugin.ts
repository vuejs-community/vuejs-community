import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'log-info-webpack-plugin',
  description: 'add console.log build info to index.html, compatible with webpack and vite',
  version: '2.0.3',
  category: 'plugin',
  tags: [
    'webpack',
    'log',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/macheteHot/log-info-webpack-plugin',
    npm: 'https://www.npmjs.com/package/log-info-webpack-plugin',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 1,
    },
  },
})
