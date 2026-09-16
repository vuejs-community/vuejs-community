import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'react-simple-inspector',
  description: 'Dev-only click-to-source inspector for Vite + React. Cmd/Ctrl+X to outline any element and open its exact source line in your editor.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'inspector',
    'devtools',
    'click-to-source',
  ],
  source: {
    github: 'merunus/react-simple-inspector',
    npm: 'react-simple-inspector',
  },
  links: {
    github: 'https://github.com/merunus/react-simple-inspector',
    npm: 'https://www.npmjs.com/package/react-simple-inspector',
    website: 'https://github.com/merunus/react-simple-inspector#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 626,
      weekly: 18,
    },
  },
})
