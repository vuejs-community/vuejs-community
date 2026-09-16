import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'build-version-json',
  description: 'Webpack / Vite 构建完成后写入 version.json，用于前端版本更新检测',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'QINGYUAI/build-version-json',
    npm: 'build-version-json',
  },
  links: {
    github: 'https://github.com/QINGYUAI/build-version-json',
    npm: 'https://www.npmjs.com/package/build-version-json',
    website: 'https://github.com/QINGYUAI/build-version-json#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 784,
      weekly: 6,
    },
  },
})
