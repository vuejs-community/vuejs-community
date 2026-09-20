import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stewie-js/vite',
  description: 'Vite plugin for the Stewie framework',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'hmr',
    'jsx',
    'stewie',
    'typescript',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cwins/stewie-js',
    npm: 'https://www.npmjs.com/package/@stewie-js/vite',
    website: 'https://github.com/cwins/stewie-js/tree/main/packages/vite#readme',
  },
  source: {
    github: 'cwins/stewie-js',
    npm: '@stewie-js/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 539,
      weekly: 6,
    },
  },
})
