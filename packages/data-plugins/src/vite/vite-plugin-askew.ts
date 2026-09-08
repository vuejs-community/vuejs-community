import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-askew',
  description: 'WebMCP-native live UI debugging for React, Vite, and Tailwind.',
  icon: 'logos:vite-icon',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'react',
    'tailwindcss',
    'webmcp',
    'ui-debugging',
    'ai',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'codersguru-hub/askew',
    npm: 'vite-plugin-askew',
  },
  links: {
    github: 'https://github.com/codersguru-hub/askew',
    npm: 'https://www.npmjs.com/package/vite-plugin-askew',
  },
  stats: {
    downloads: {
      monthly: 2,
      weekly: 2,
    },
  },
})
