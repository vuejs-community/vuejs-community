import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@corex-ui/vite',
  description: 'Vite plugin for rendering Corex UI static components post-build.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'corex',
    'corex-ui',
    'components',
    'static',
    'render',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/corex-ui/corex-ui',
    npm: 'https://www.npmjs.com/package/@corex-ui/vite',
  },
  stats: {
    downloads: {
      monthly: 100,
      weekly: 9,
    },
  },
})
