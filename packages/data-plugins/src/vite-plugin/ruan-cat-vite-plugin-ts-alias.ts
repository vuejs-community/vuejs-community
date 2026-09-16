import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ruan-cat/vite-plugin-ts-alias',
  description: '将 tsconfig.paths 配置转换成 vite 的 alias 路径别名。',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite plugin',
    'vite-plugin',
    'tsconfig paths',
    'alias',
  ],
  source: {
    github: 'ruan-cat/monorepo',
    npm: '@ruan-cat/vite-plugin-ts-alias',
  },
  links: {
    github: 'https://github.com/ruan-cat/monorepo',
    npm: 'https://www.npmjs.com/package/@ruan-cat/vite-plugin-ts-alias',
    website: 'https://github.com/ruan-cat/monorepo/tree/dev/vite-plugins/vite-plugin-ts-alias',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 29,
      weekly: 6,
    },
  },
})
