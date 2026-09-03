import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'track-tag',
  description: 'Zero-config bundler plugin that fingerprints your library in any frontend app — invisible to users, discoverable by crawlers.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'webpack-plugin',
    'fingerprint',
    'analytics',
    'tracking',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/track-tag',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 1,
    },
  },
})
