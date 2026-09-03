import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-types',
  description: 'Vite开发的Vue项目编译类型声明文件*.d.ts',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-build-types',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
