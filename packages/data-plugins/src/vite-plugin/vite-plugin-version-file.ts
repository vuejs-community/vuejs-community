import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-file',
  description: 'vite 打包生成版本文件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'plugin',
    'version',
    'file',
  ],
  source: {
    github: 'Woshiajuana/vite-plugin-version-file',
    npm: 'vite-plugin-version-file',
  },
  links: {
    github: 'https://github.com/Woshiajuana/vite-plugin-version-file',
    npm: 'https://www.npmjs.com/package/vite-plugin-version-file',
    website: 'https://github.com/Woshiajuana/vite-plugin-version-file#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
