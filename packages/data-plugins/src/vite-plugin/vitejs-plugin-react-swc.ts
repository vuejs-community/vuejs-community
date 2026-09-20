import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vitejs/plugin-react-swc',
  description: 'Speed up your Vite dev server with SWC',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'fast refresh',
    'react',
    'react-refresh',
    'swc',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vitejs/vite-plugin-react',
    npm: 'https://www.npmjs.com/package/@vitejs/plugin-react-swc',
    website: 'https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react-swc#readme',
  },
  source: {
    github: 'vitejs/vite-plugin-react',
    npm: '@vitejs/plugin-react-swc',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 41705851,
      weekly: 7651625,
    },
  },
})
