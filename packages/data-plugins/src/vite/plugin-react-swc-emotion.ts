import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'plugin-react-swc-emotion',
  description: 'Speed up your Vite dev server with SWC',
  version: '3.0.1',
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
    npm: 'https://www.npmjs.com/package/plugin-react-swc-emotion',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
