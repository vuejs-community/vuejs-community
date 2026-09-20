import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-antdv1-momentjs-resolver-zmh',
  description: 'Solve the Bug of vite execution error because antd-vue version 1.7.8 imported moment by using interopDefault',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ant-design-vue',
    'moment',
  ],
  links: {
    github: 'https://github.com/carl-jin/vite-plugin-antdv1-momentjs-resolver',
    npm: 'https://www.npmjs.com/package/vite-plugin-antdv1-momentjs-resolver-zmh',
    website: 'https://github.com/carl-jin/vite-plugin-antdv1-momentjs-resolver/tree/main/#readme',
  },
  source: {
    github: 'carl-jin/vite-plugin-antdv1-momentjs-resolver',
    npm: 'vite-plugin-antdv1-momentjs-resolver-zmh',
  },
  stats: {
    stars: 9,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
