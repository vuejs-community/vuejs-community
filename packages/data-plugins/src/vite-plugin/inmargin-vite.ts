import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@inmargin/vite',
  description: 'Vite plugin for Margin — syncs your analytics config on dev start and build',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'analytics',
    'inmargin',
    'margin',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'jamiedavenport/margin',
    npm: '@inmargin/vite',
  },
  links: {
    github: 'https://github.com/jamiedavenport/margin',
    npm: 'https://www.npmjs.com/package/@inmargin/vite',
    website: 'https://inmargin.io',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 2,
    },
  },
})
