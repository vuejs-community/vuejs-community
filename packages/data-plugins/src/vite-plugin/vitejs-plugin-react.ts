import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vitejs/plugin-react',
  description: 'The default Vite plugin for React projects',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'fast refresh',
    'react',
    'react-refresh',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vitejs/vite-plugin-react',
    npm: 'https://www.npmjs.com/package/@vitejs/plugin-react',
    website: 'https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react#readme',
  },
  source: {
    github: 'vitejs/vite-plugin-react',
    npm: '@vitejs/plugin-react',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 318493751,
      weekly: 65129121,
    },
  },
})
