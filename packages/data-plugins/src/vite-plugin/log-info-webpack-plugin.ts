import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'log-info-webpack-plugin',
  description: 'add console.log build info to index.html, compatible with webpack and vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'webpack',
    'log',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/macheteHot/log-info-webpack-plugin',
    npm: 'https://www.npmjs.com/package/log-info-webpack-plugin',
    website: 'https://github.com/macheteHot/log-info-webpack-plugin#readme',
  },
  source: {
    github: 'macheteHot/log-info-webpack-plugin',
    npm: 'log-info-webpack-plugin',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 7,
      weekly: 2,
    },
  },
})
