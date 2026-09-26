import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@fixback/vite-plugin',
  description: 'Vite plugin that uploads your production build\'s sourcemaps to Fixback automatically, so captured errors arrive with a symbolicated code-area pointer.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'fixback',
    'vite',
    'vite-plugin',
    'sourcemaps',
    'source-maps',
    'error-tracking',
    'symbolication',
  ],
  links: {
    github: 'https://github.com/wemuda/fixback',
    npm: 'https://www.npmjs.com/package/@fixback/vite-plugin',
    website: 'https://docs.fixback.dev/sdk/sourcemaps',
  },
  source: {
    github: 'wemuda/fixback',
    npm: '@fixback/vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 234,
      weekly: 234,
    },
  },
})
