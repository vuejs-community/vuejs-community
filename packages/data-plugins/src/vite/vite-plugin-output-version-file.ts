import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-output-version-file',
  description: 'Vite 插件：自动生成版本信息文件到构建输出目录',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'build-info',
    'git-hash',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-output-version-file',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 3,
    },
  },
})
