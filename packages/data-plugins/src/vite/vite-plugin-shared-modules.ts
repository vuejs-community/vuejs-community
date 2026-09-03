import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shared-modules',
  description: 'Alias node_modules to specific one',
  version: '0.2.2',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/zheeeng/vite-plugin-shared-modules',
    npm: 'https://www.npmjs.com/package/vite-plugin-shared-modules',
  },
  stats: {
    downloads: {
      monthly: 37,
      weekly: 6,
    },
  },
})
