import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@acusti/vite-plugin-react-compiler',
  description: 'Vite plugin that runs React Compiler via oxc-transform-react, the native Rust port’s Node bindings, instead of Babel',
  version: '0.4.0',
  category: 'plugin',
  tags: [
    'memoization',
    'oxc',
    'react',
    'react-compiler',
    'rolldown',
    'rust',
    'ts',
    'typescript',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/acusti/uikit',
    npm: 'https://www.npmjs.com/package/@acusti/vite-plugin-react-compiler',
  },
  stats: {
    downloads: {
      monthly: 642,
      weekly: 231,
    },
  },
})
