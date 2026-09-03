import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@inmargin/vite',
  description: 'Vite plugin for Margin — syncs your analytics config on dev start and build',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'analytics',
    'inmargin',
    'margin',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jamiedavenport/margin',
    npm: 'https://www.npmjs.com/package/@inmargin/vite',
  },
  stats: {
    downloads: {
      monthly: 32,
      weekly: 4,
    },
  },
})
