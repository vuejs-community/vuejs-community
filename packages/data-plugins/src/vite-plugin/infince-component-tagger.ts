import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@infince/component-tagger',
  description: 'Vite plugin to add data-infince-id and data-infince-name to every JSX element in dev mode',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'react',
    'jsx',
    'debug',
    'infince',
  ],
  source: {
    npm: '@infince/component-tagger',
  },
  links: {
    npm: 'https://www.npmjs.com/package/@infince/component-tagger',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 153,
      weekly: 23,
    },
  },
})
