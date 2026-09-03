import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-react-fiber-source',
  description: 'Vite plugin to fix React 19 removing _debugSource issue',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'react-19',
    'fiber',
    'debug-source',
    'jsx-dev-runtime',
    'debuginfo',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-react-fiber-source',
  },
  stats: {
    downloads: {
      monthly: 453,
      weekly: 59,
    },
  },
})
