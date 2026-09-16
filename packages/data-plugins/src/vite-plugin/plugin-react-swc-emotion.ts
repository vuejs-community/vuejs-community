import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'plugin-react-swc-emotion',
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
  source: {
    github: 'vitejs/vite-plugin-react-swc',
    npm: 'plugin-react-swc-emotion',
  },
  links: {
    github: 'https://github.com/vitejs/vite-plugin-react-swc',
    npm: 'https://www.npmjs.com/package/plugin-react-swc-emotion',
    website: 'https://github.com/vitejs/vite-plugin-react-swc#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
