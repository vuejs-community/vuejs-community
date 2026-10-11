import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@errlume/vite',
  description: 'Vite plugin for ErrLume: wraps class methods in server code so errors carry their call path and every method is timed.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'errlume',
    'error-tracking',
    'error-monitoring',
    'exceptions',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/nickcellis/Let-sTrack',
    npm: 'https://www.npmjs.com/package/@errlume/vite',
    website: 'https://github.com/nickcellis/Let-sTrack/tree/main/packages/vite',
  },
  source: {
    github: 'nickcellis/Let-sTrack',
    npm: '@errlume/vite',
  },
})
