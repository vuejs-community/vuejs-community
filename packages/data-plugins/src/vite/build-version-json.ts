import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'build-version-json',
  description: 'Webpack / Vite 构建完成后写入 version.json，用于前端版本更新检测',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'webpack',
    'webpack-plugin',
    'vite',
    'vite-plugin',
    'typescript',
    'version',
    'version-json',
    'auto-update',
    'vue-cli',
    'build-version',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/QINGYUAI/build-version-json',
    npm: 'https://www.npmjs.com/package/build-version-json',
  },
  stats: {
    downloads: {
      monthly: 765,
      weekly: 340,
    },
  },
})
