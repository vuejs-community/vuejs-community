import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'todo-tree-checker',
  description: 'Scan TODO/FIXME comments via CLI or as a Vite/Webpack plugin before build.',
  version: '1.2.0',
  category: 'plugin',
  tags: [
    'todo-tree',
    'todo',
    'fixme',
    'vite-plugin',
    'webpack-plugin',
    'check',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/tcguoxing/todo-tree-checker',
    npm: 'https://www.npmjs.com/package/todo-tree-checker',
  },
  stats: {
    downloads: {
      monthly: 53,
      weekly: 5,
    },
  },
})
