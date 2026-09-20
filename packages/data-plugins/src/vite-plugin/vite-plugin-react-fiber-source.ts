import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-react-fiber-source',
  description: 'Vite plugin to fix React 19 removing _debugSource issue',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-react-fiber-source',
  },
  source: {
    npm: 'vite-plugin-react-fiber-source',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 335,
      weekly: 10,
    },
  },
})
