import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'friday-plugin-react-swc',
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
    github: 'https://github.com/vitejs/vite-plugin-react-swc',
    npm: 'https://www.npmjs.com/package/friday-plugin-react-swc',
    website: 'https://github.com/vitejs/vite-plugin-react-swc#readme',
  },
  source: {
    github: 'vitejs/vite-plugin-react-swc',
    npm: 'friday-plugin-react-swc',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
