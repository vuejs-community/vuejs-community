import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@1mn/vite-plugin',
  description: 'Vite plugin for 1mn — uploads hidden source maps at build time so client-side errors symbolicate to original source. Pairs with @1mn/react.',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    '1mn',
    'vite',
    'vite-plugin',
    'sourcemaps',
    'source-maps',
    'error-tracking',
    'sentry',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/usefulagents/1mn-sdk',
    npm: 'https://www.npmjs.com/package/@1mn/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 315,
      weekly: 9,
    },
  },
})
