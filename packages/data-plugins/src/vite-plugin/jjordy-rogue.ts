import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jjordy/rogue',
  description: 'JSX → web components compiler with fine-grained reactivity, file-system routing, and SSR/hydration. Vite plugin + tiny runtime.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'jjordy/rogue',
    npm: '@jjordy/rogue',
  },
  links: {
    github: 'https://github.com/jjordy/rogue',
    npm: 'https://www.npmjs.com/package/@jjordy/rogue',
    website: 'https://github.com/jjordy/rogue#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 73,
      weekly: 3,
    },
  },
})
