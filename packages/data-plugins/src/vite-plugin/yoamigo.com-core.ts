import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@yoamigo.com/core',
  description: 'Core components, router, and utilities for YoAmigo templates',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'yoamigo',
    'vite',
    'vite-plugin',
    'template',
    'react',
    'preact',
    'website-builder',
  ],
  links: {
    github: 'https://github.com/yoamigo/sdk',
    npm: 'https://www.npmjs.com/package/@yoamigo.com/core',
    website: 'https://yoamigo.com/developers',
  },
  source: {
    github: 'yoamigo/sdk',
    npm: '@yoamigo.com/core',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 95,
      weekly: 17,
    },
  },
})
