import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stax-ui/vite-plugin',
  description: 'Vite plugin for Stax applications',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'effect',
    'effect-ts',
    'vite',
    'vite-plugin',
    'ssr',
  ],
  links: {
    github: 'https://github.com/stax-ui/stax',
    npm: 'https://www.npmjs.com/package/@stax-ui/vite-plugin',
    website: 'https://github.com/stax-ui/stax#readme',
  },
  source: {
    github: 'stax-ui/stax',
    npm: '@stax-ui/vite-plugin',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 1007,
      weekly: 25,
    },
  },
})
