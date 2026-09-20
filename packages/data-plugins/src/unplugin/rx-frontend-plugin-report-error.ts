import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rx-frontend/plugin-report-error',
  description: 'Register global imports on demand for Vite and Webpack',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@rx-frontend/plugin-report-error',
    website: 'https://gitee.com/rx-front-end-development/web-error-reporting/tree/master/plugin',
  },
  source: {
    npm: '@rx-frontend/plugin-report-error',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
