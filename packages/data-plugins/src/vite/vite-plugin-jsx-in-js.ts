import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-jsx-in-js',
  description: 'Vite plugin that treats selected .js React files as JSX for React Refresh.',
  icon: 'logos:vite-icon',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'react-refresh',
    'jsx',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'EnixCoda/vite-plugin-jsx-in-js',
    npm: 'vite-plugin-jsx-in-js',
  },
  links: {
    github: 'https://github.com/EnixCoda/vite-plugin-jsx-in-js',
    npm: 'https://www.npmjs.com/package/vite-plugin-jsx-in-js',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 4,
    },
  },
})
