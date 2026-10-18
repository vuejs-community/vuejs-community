import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'jg-sw',
  description: 'Service workers for web apps: a generated caching worker with a Vite plugin and CLI, plus registration, updates, and installation.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'service-worker',
    'pwa',
    'cache',
    'precache',
    'vite-plugin',
    'firebase-cloud-messaging',
  ],
  links: {
    github: 'https://github.com/jesusgraterol/jg-packages',
    npm: 'https://www.npmjs.com/package/jg-sw',
    website: 'https://jg-packages.jesusgraterol.dev/packages/jg-sw/',
  },
  source: {
    github: 'jesusgraterol/jg-packages',
    npm: 'jg-sw',
  },
})
