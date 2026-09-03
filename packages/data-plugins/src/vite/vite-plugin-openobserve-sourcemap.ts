import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-openobserve-sourcemap',
  description: 'Vite plugin that uploads source maps to OpenObserve RUM after build and removes them from the output directory',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'sourcemap',
    'source-map',
    'openobserve',
    'rum',
    'error-tracking',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/sirilerklab/vite-plugin-openobserve-sourcemap',
    npm: 'https://www.npmjs.com/package/vite-plugin-openobserve-sourcemap',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
