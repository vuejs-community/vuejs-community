import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@ruan-cat/vite-plugin-ts-alias',
  description: '将 tsconfig.paths 配置转换成 vite 的 alias 路径别名。',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite plugin',
    'vite-plugin',
    'tsconfig paths',
    'alias',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ruan-cat/monorepo',
    npm: 'https://www.npmjs.com/package/@ruan-cat/vite-plugin-ts-alias',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 5,
    },
  },
})
