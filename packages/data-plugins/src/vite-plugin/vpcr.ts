import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vpcr',
  description: 'A powerful Vite plugin that automatically tags React components with source reference attributes, enabling features like \'Alt + Click\' to open source files in your IDE.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'babel',
    'tagger',
    'source-reference',
    'click-to-open',
    'antigravity',
    'cursor',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vpcr',
    website: 'https://vpcr.vercel.app',
  },
  source: {
    npm: 'vpcr',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 251,
      weekly: 51,
    },
  },
})
