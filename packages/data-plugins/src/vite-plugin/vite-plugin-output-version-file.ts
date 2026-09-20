import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-output-version-file',
  description: 'Vite 插件：自动生成版本信息文件到构建输出目录',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'build-info',
    'git-hash',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-output-version-file',
  },
  source: {
    npm: 'vite-plugin-output-version-file',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 1,
    },
  },
})
