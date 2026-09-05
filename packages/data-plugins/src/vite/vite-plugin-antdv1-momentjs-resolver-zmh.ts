import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-antdv1-momentjs-resolver-zmh',
  description: 'Solve the Bug of vite execution error because antd-vue version 1.7.8 imported moment by using interopDefault',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'ant-design-vue',
    'moment',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/carl-jin/vite-plugin-antdv1-momentjs-resolver',
    npm: 'https://www.npmjs.com/package/vite-plugin-antdv1-momentjs-resolver-zmh',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 0,
    },
  },
})
