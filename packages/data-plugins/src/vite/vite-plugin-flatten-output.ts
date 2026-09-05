import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-flatten-output',
  description: 'A Vite plugin to remove specific directory paths from file outputs during build.',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'file-structure',
    'flatten-output',
    'vite-output-plugin',
    'vite-chrome-extension',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/myudak/vite-plugin-flatten-output',
    npm: 'https://www.npmjs.com/package/vite-plugin-flatten-output',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 3,
    },
  },
})
