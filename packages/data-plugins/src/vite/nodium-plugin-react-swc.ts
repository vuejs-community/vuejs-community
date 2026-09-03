import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nodium/plugin-react-swc',
  description: 'Speed up your Vite dev server with SWC',
  version: '1.0.0',
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
    npm: 'https://www.npmjs.com/package/@nodium/plugin-react-swc',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 6,
    },
  },
})
