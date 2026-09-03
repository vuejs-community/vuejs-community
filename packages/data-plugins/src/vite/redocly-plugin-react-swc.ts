import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@redocly/plugin-react-swc',
  description: 'Speed up your Vite dev server with SWC',
  version: '3.10.1',
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
    github: 'https://github.com/vitejs/vite-plugin-react',
    npm: 'https://www.npmjs.com/package/@redocly/plugin-react-swc',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 5,
    },
  },
})
