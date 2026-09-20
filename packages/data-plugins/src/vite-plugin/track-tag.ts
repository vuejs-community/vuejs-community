import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'track-tag',
  description: 'Zero-config bundler plugin that fingerprints your library in any frontend app — invisible to users, discoverable by crawlers.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'webpack-plugin',
    'fingerprint',
    'analytics',
    'tracking',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/track-tag',
  },
  source: {
    npm: 'track-tag',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
