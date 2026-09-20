import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@corex-ui/vite',
  description: 'Vite plugin for rendering Corex UI static components post-build.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'corex',
    'corex-ui',
    'components',
    'static',
    'render',
  ],
  links: {
    github: 'https://github.com/corex-ui/corex-ui',
    npm: 'https://www.npmjs.com/package/@corex-ui/vite',
    website: 'https://corex-ui.com',
  },
  source: {
    github: 'corex-ui/corex-ui',
    npm: '@corex-ui/vite',
  },
  stats: {
    stars: 18,
    downloads: {
      monthly: 68,
      weekly: 3,
    },
  },
})
