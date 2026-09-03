import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@uni-helper/plugin-uni',
  description: 'uni-app plugin 的 ESM 导出',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'uni-app',
    'uni-helper',
    'vite',
    'vite-plugin',
    'ESM',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/uni-helper/plugin-uni',
    npm: 'https://www.npmjs.com/package/@uni-helper/plugin-uni',
  },
  stats: {
    downloads: {
      monthly: 6497,
      weekly: 1417,
    },
  },
})
