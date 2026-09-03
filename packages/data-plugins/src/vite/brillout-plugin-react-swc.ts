import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@brillout/plugin-react-swc',
  description: 'Speed up your Vite dev server with SWC',
  version: '3.0.0-patch-21',
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
    npm: 'https://www.npmjs.com/package/@brillout/plugin-react-swc',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 5,
    },
  },
})
