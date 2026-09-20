import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hyorg/plugin-react-swc',
  description: 'fork from https://github.com/vitejs/vite-plugin-react-swc',
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
    github: 'https://github.com/huyingx/vite-plugin-react-swc',
    npm: 'https://www.npmjs.com/package/@hyorg/plugin-react-swc',
    website: 'https://github.com/huyingx/vite-plugin-react-swc#readme',
  },
  source: {
    github: 'huyingx/vite-plugin-react-swc',
    npm: '@hyorg/plugin-react-swc',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 2,
    },
  },
})
