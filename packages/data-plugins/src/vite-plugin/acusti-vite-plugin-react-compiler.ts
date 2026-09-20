import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@acusti/vite-plugin-react-compiler',
  description: 'Vite plugin that runs React Compiler via oxc-transform-react, the native Rust port’s Node bindings, instead of Babel',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/acusti/uikit',
    npm: 'https://www.npmjs.com/package/@acusti/vite-plugin-react-compiler',
    website: 'https://github.com/acusti/uikit/tree/main/packages/vite-plugin-react-compiler#readme',
  },
  source: {
    github: 'acusti/uikit',
    npm: '@acusti/vite-plugin-react-compiler',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 1197,
      weekly: 522,
    },
  },
})
