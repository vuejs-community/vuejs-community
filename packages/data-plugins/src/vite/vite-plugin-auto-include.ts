import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-include',
  description: 'A tool that can auto add babel-plugin-import\'s result to vite\'s Pre-bundling dependencies.',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'auto-include',
    'vite-plugin',
    'vite',
    'babel-plugin-import',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cx690/vite-plugin-auto-include',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-include',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 6,
    },
  },
})
