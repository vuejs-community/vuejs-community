import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-types',
  description: 'Vite开发的Vue项目编译类型声明文件*.d.ts',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    npm: 'vite-plugin-build-types',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-build-types',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
