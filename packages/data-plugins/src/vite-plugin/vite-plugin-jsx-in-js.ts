import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-jsx-in-js',
  description: 'Vite plugin that treats selected .js React files as JSX for React Refresh.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'react-refresh',
    'jsx',
  ],
  source: {
    github: 'EnixCoda/vite-plugin-jsx-in-js',
    npm: 'vite-plugin-jsx-in-js',
  },
  links: {
    github: 'https://github.com/EnixCoda/vite-plugin-jsx-in-js',
    npm: 'https://www.npmjs.com/package/vite-plugin-jsx-in-js',
    website: 'https://github.com/EnixCoda/vite-plugin-jsx-in-js#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
