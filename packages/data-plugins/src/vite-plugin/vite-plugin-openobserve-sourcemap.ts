import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-openobserve-sourcemap',
  description: 'Vite plugin that uploads source maps to OpenObserve RUM after build and removes them from the output directory',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'sourcemap',
    'source-map',
    'openobserve',
    'rum',
    'error-tracking',
  ],
  source: {
    github: 'sirilerklab/vite-plugin-openobserve-sourcemap',
    npm: 'vite-plugin-openobserve-sourcemap',
  },
  links: {
    github: 'https://github.com/sirilerklab/vite-plugin-openobserve-sourcemap',
    npm: 'https://www.npmjs.com/package/vite-plugin-openobserve-sourcemap',
    website: 'https://github.com/sirilerklab/vite-plugin-openobserve-sourcemap#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
