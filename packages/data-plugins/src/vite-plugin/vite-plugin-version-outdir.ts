import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-outdir',
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
  source: {
    npm: 'vite-plugin-version-outdir',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-version-outdir',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 1,
    },
  },
})
