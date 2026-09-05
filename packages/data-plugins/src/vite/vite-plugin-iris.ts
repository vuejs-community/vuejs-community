import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-iris',
  description: 'Dev-mode element inspector for Vite + React: tags JSX with source locations.',
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
  links: {
    github: 'https://github.com/esmeccy/iris',
    npm: 'https://www.npmjs.com/package/vite-plugin-iris',
  },
  stats: {
    downloads: {
      monthly: 33,
      weekly: 4,
    },
  },
})
