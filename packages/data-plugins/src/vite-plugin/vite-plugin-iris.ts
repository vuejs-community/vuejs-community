import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-iris',
  description: 'Dev-mode element inspector for Vite + React: tags JSX with source locations.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'inspector',
    'devtools',
    'react',
    'css',
    'design-tokens',
  ],
  links: {
    github: 'https://github.com/esmeccy/iris',
    npm: 'https://www.npmjs.com/package/vite-plugin-iris',
    website: 'https://github.com/esmeccy/iris#readme',
  },
  source: {
    github: 'esmeccy/iris',
    npm: 'vite-plugin-iris',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 21,
      weekly: 1,
    },
  },
})
