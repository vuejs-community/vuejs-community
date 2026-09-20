import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@idonnyfe/vite-plugin-workflow',
  description: '一个用于优化工作流的 vite 插件包，提供多种实用vite插件',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin-workflow',
    'workflow',
    'vite-plugin',
    'deploy server',
    'deploy npm',
  ],
  links: {
    github: 'https://github.com/donnyfe/vite-plugin-workflow',
    npm: 'https://www.npmjs.com/package/@idonnyfe/vite-plugin-workflow',
    website: 'https://github.com/donnyfe/vite-plugin-workflow/README.md',
  },
  source: {
    github: 'donnyfe/vite-plugin-workflow',
    npm: '@idonnyfe/vite-plugin-workflow',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 2,
    },
  },
})
