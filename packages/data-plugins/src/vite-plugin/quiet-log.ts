import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'quiet-log',
  description: 'Pretty console logs (colors, icons, scopes, timers, dividers) that show only on localhost and get stripped from staging/production builds.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'console',
    'log',
    'logger',
    'debug',
    'dev',
    'localhost',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/quiet-log',
  },
  source: {
    npm: 'quiet-log',
  },
})
