import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@maaamahahh/happy.js',
  description: 'Stabilizes object shapes, separates DOM layout reads from writes, auto-memos React components, batches DOM mutations, splits long tasks, and renders dense lists via WebGL with SDF text.',
  version: '0.5.0',
  category: 'plugin',
  tags: [
    'performance',
    'optimization',
    'react',
    'v8',
    'hidden-class',
    'layout-thrashing',
    'dom-batching',
    'frontend',
    'babel-plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/maaamahahh/happy.js',
    npm: 'https://www.npmjs.com/package/@maaamahahh/happy.js',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
