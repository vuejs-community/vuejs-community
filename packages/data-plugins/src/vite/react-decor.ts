import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'react-decor',
  description: 'Compile-time @ decorators for React function components — pure JSX composition, zero runtime, no HOCs.',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'react',
    'decorators',
    'jsx',
    'composition',
    'compile-time',
    'zero-runtime',
    'vite-plugin',
    'webpack-loader',
    'turbopack',
    'eslint-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/reuvenaor/react-decor',
    npm: 'https://www.npmjs.com/package/react-decor',
  },
  stats: {
    downloads: {
      monthly: 178,
      weekly: 6,
    },
  },
})
