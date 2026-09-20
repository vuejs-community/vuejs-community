import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shared-modules',
  description: 'Alias node_modules to specific one',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'node_modules',
    'pnpm',
    'monorepo',
    'share',
    'rewrite',
    'alias',
    'resolve',
  ],
  links: {
    github: 'https://github.com/zheeeng/vite-plugin-shared-modules',
    npm: 'https://www.npmjs.com/package/vite-plugin-shared-modules',
    website: 'https://github.com/zheeeng/vite-plugin-shared-modules#readme',
  },
  source: {
    github: 'zheeeng/vite-plugin-shared-modules',
    npm: 'vite-plugin-shared-modules',
  },
  stats: {
    stars: 34,
    downloads: {
      monthly: 44,
      weekly: 2,
    },
  },
})
