import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sola-air-ui/vite-plugin-sola',
  description: 'Vite plugin for Sola — compile .sola single-file components at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'sola',
    'vite',
    'vite-plugin',
    'sfc',
    'compiler',
    'zero-vdom',
  ],
  source: {
    github: 'rbm3267/sola-air',
    npm: '@sola-air-ui/vite-plugin-sola',
  },
  links: {
    github: 'https://github.com/rbm3267/sola-air',
    npm: 'https://www.npmjs.com/package/@sola-air-ui/vite-plugin-sola',
    website: 'https://sola-air.dev',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 620,
      weekly: 31,
    },
  },
})
