import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@uni-helper/plugin-uni',
  description: 'uni-app plugin 的 ESM 导出',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'uni-app',
    'uni-helper',
    'vite',
    'vite-plugin',
    'ESM',
  ],
  source: {
    github: 'uni-helper/plugin-uni',
    npm: '@uni-helper/plugin-uni',
  },
  links: {
    github: 'https://github.com/uni-helper/plugin-uni',
    npm: 'https://www.npmjs.com/package/@uni-helper/plugin-uni',
    website: 'https://github.com/uni-helper/plugin-uni#readme',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 5071,
      weekly: 1010,
    },
  },
})
