import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-license',
  description: 'Vite plugin to add license banner to bundled output. Tiny wrapper for rollup-plugin-license.',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'typescript',
    'license',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/tasshi-me/vite-plugin-license',
    npm: 'https://www.npmjs.com/package/vite-plugin-license',
  },
  stats: {
    downloads: {
      monthly: 17170,
      weekly: 7969,
    },
  },
})
