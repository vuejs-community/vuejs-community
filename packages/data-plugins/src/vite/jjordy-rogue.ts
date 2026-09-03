import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@jjordy/rogue',
  description: 'JSX → web components compiler with fine-grained reactivity, file-system routing, and SSR/hydration. Vite plugin + tiny runtime.',
  version: '0.7.0',
  category: 'plugin',
  tags: [
    'web-components',
    'custom-elements',
    'jsx',
    'vite-plugin',
    'ssr',
    'hydration',
    'signals',
    'reactive',
    'fine-grained',
    'declarative-shadow-dom',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jjordy/rogue',
    npm: 'https://www.npmjs.com/package/@jjordy/rogue',
  },
  stats: {
    downloads: {
      monthly: 79,
      weekly: 5,
    },
  },
})
