import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-outdir',
  description: 'Vite 插件：自动生成版本信息文件到构建输出目录',
  version: '1.0.0',
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
    npm: 'https://www.npmjs.com/package/vite-plugin-version-outdir',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
