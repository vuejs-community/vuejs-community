import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vpcr',
  description: 'A powerful Vite plugin that automatically tags React components with source reference attributes, enabling features like \'Alt + Click\' to open source files in your IDE.',
  version: '1.1.1',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vpcr',
  },
  stats: {
    downloads: {
      monthly: 242,
      weekly: 25,
    },
  },
})
