import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@effuse/compiler',
  description: 'An optimized JSX/TSX transformer that automatically handles reactive signal access, reducing boilerplate without impacting performance.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'effuse',
    'compiler',
    'jsx',
    'signals',
    'reactivity',
    'vite-plugin',
    'babel',
    'transform',
  ],
  source: {
    github: 'chrismichaelps/effuse',
    npm: '@effuse/compiler',
  },
  links: {
    github: 'https://github.com/chrismichaelps/effuse',
    npm: 'https://www.npmjs.com/package/@effuse/compiler',
    website: 'https://github.com/chrismichaelps/effuse#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 93,
      weekly: 1,
    },
  },
})
