import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-data',
  description: 'Resolve and bundle data loader file exports at build-time.',
  version: '0.2.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'data',
    'loader',
    'json',
    'build',
    'build-time',
    'compile',
    'compile-time',
    'exports',
    'resolve',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Shakeskeyboarde/vite-plugin-data',
    npm: 'https://www.npmjs.com/package/vite-plugin-data',
  },
  stats: {
    downloads: {
      monthly: 128,
      weekly: 21,
    },
  },
})
