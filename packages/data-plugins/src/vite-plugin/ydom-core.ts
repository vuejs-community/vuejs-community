import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'ydom-core',
  description: 'Core reactive UI engine, AST parser, and Vite compiler plugin for YDOM',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ydom',
    'ydom-core',
    'reactive-ui',
    'ast-parser',
    'signals',
    'vite-plugin',
    'ui-engine',
  ],
  source: {
    npm: 'ydom-core',
  },
  links: {
    npm: 'https://www.npmjs.com/package/ydom-core',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 208,
      weekly: 182,
    },
  },
})
