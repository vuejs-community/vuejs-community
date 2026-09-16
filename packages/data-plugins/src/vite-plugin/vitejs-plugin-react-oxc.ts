import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vitejs/plugin-react-oxc',
  description: 'The future default Vite plugin for React projects',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'oxc',
    'react-refresh',
    'fast refresh',
  ],
  source: {
    github: 'vitejs/vite-plugin-react',
    npm: '@vitejs/plugin-react-oxc',
  },
  links: {
    github: 'https://github.com/vitejs/vite-plugin-react',
    npm: 'https://www.npmjs.com/package/@vitejs/plugin-react-oxc',
    website: 'https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 147901,
      weekly: 25018,
    },
  },
})
