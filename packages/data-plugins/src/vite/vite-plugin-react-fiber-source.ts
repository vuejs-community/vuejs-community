import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-react-fiber-source',
  description: 'Vite plugin to fix React 19 removing _debugSource issue',
  icon: 'logos:vite-icon',
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
  source: {
    github: '',
    npm: 'vite-plugin-react-fiber-source',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-react-fiber-source',
  },
  stats: {
    downloads: {
      monthly: 361,
      weekly: 26,
    },
  },
})
