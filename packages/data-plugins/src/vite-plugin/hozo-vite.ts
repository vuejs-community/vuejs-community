import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hozo/vite',
  description: 'Vite integration for the Hozo compiler (Web lowering backend).',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react-native',
    'react-native-web',
  ],
  links: {
    github: 'https://github.com/iray-tno/hozo',
    npm: 'https://www.npmjs.com/package/@hozo/vite',
    website: 'https://iray-tno.github.io/hozo/',
  },
  source: {
    github: 'iray-tno/hozo',
    npm: '@hozo/vite',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
