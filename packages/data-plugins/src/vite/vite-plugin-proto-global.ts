import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-proto-global',
  description: 'Auto-import pure functions from utils folder and extend JavaScript prototypes globally in your Vite project',
  icon: 'logos:vite-icon',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'prototype',
    'global',
    'auto-import',
    'utilities',
    'pure-functions',
    'array-methods',
    'string-methods',
    'number-methods',
    'prototype-extension',
    'javascript',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'vkuprin/vite-plugin-proto-global',
    npm: 'vite-plugin-proto-global',
  },
  links: {
    github: 'https://github.com/vkuprin/vite-plugin-proto-global',
    npm: 'https://www.npmjs.com/package/vite-plugin-proto-global',
  },
  stats: {
    downloads: {
      monthly: 48,
      weekly: 5,
    },
  },
})
