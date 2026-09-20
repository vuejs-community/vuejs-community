import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'todo-tree-checker',
  description: 'Scan TODO/FIXME comments via CLI or as a Vite/Webpack plugin before build.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'todo-tree',
    'todo',
    'fixme',
    'vite-plugin',
    'webpack-plugin',
    'check',
  ],
  links: {
    github: 'https://github.com/tcguoxing/todo-tree-checker',
    npm: 'https://www.npmjs.com/package/todo-tree-checker',
    website: 'https://github.com/tcguoxing/todo-tree-checker#readme',
  },
  source: {
    github: 'tcguoxing/todo-tree-checker',
    npm: 'todo-tree-checker',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 3,
    },
  },
})
