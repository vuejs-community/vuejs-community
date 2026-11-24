import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@isoloop/vite',
  description: 'Vite plugin for Isoloop: worker URLs, isolate builds and development headers.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'isoloop',
    'web-workers',
    'event-loop',
    'isolation',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/isoloop/isoloop',
    npm: 'https://www.npmjs.com/package/@isoloop/vite',
    website: 'https://isoloop.dev/docs/api/vite/',
  },
  source: {
    github: 'isoloop/isoloop',
    npm: '@isoloop/vite',
  },
})
