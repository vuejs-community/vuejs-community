import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'friday-plugin-react-swc',
  description: 'Speed up your Vite dev server with SWC',
  version: '3.3.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'swc',
    'react-refresh',
    'fast refresh',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vitejs/vite-plugin-react-swc',
    npm: 'https://www.npmjs.com/package/friday-plugin-react-swc',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 3,
    },
  },
})
