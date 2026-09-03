import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'react-simple-inspector',
  description: 'Dev-only click-to-source inspector for Vite + React. Cmd/Ctrl+X to outline any element and open its exact source line in your editor.',
  version: '0.3.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'inspector',
    'devtools',
    'click-to-source',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/merunus/react-simple-inspector',
    npm: 'https://www.npmjs.com/package/react-simple-inspector',
  },
  stats: {
    downloads: {
      monthly: 445,
      weekly: 13,
    },
  },
})
