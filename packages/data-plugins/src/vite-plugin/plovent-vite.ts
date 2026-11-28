import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@plovent/vite',
  description: 'Plovent\'s Vite plugin: source maps uploaded for error tracking, the build\'s release, and the browser\'s capture started, for Vite sites on Cloudflare.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'analytics',
    'cloudflare',
    'error-tracking',
    'plovent',
    'source-maps',
    'tanstack-intent',
    'tanstack-start',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/plovent/plovent',
    npm: 'https://www.npmjs.com/package/@plovent/vite',
    website: 'https://plovent.com/docs',
  },
  source: {
    github: 'plovent/plovent',
    npm: '@plovent/vite',
  },
})
