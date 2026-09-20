import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@redocly/plugin-react-swc',
  description: 'Speed up your Vite dev server with SWC',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'swc',
    'react-refresh',
    'fast refresh',
  ],
  links: {
    github: 'https://github.com/vitejs/vite-plugin-react',
    npm: 'https://www.npmjs.com/package/@redocly/plugin-react-swc',
    website: 'https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react-swc#readme',
  },
  source: {
    github: 'vitejs/vite-plugin-react',
    npm: '@redocly/plugin-react-swc',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
