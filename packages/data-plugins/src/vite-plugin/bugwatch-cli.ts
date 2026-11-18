import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'bugwatch-cli',
  description: 'Upload source maps to Bugwatch from CI (CLI and Vite plugin)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'bugwatch',
    'source-maps',
    'sourcemaps',
    'vite-plugin',
    'cli',
  ],
  links: {
    github: 'https://github.com/Ravivicks/sentry-like-sdk',
    npm: 'https://www.npmjs.com/package/bugwatch-cli',
    website: 'https://github.com/Ravivicks/sentry-like-sdk/tree/main/cli#readme',
  },
  source: {
    github: 'Ravivicks/sentry-like-sdk',
    npm: 'bugwatch-cli',
  },
})
