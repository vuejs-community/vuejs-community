import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-data',
  description: 'Resolve and bundle data loader file exports at build-time.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/Shakeskeyboarde/vite-plugin-data',
    npm: 'https://www.npmjs.com/package/vite-plugin-data',
    website: 'https://github.com/Shakeskeyboarde/vite-plugin-data/blob/main/packages/plugin/README.md',
  },
  source: {
    github: 'Shakeskeyboarde/vite-plugin-data',
    npm: 'vite-plugin-data',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 119,
      weekly: 17,
    },
  },
})
