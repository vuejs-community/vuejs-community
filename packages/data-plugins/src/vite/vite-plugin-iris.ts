import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-iris',
  description: 'Dev-mode element inspector for Vite + React: tags JSX with source locations.',
  icon: 'logos:vite-icon',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'inspector',
    'devtools',
    'react',
    'css',
    'design-tokens',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'esmeccy/iris',
    npm: 'vite-plugin-iris',
  },
  links: {
    github: 'https://github.com/esmeccy/iris',
    npm: 'https://www.npmjs.com/package/vite-plugin-iris',
  },
  stats: {
    downloads: {
      monthly: 29,
      weekly: 0,
    },
  },
})
