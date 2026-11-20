import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@adsentinel/vite',
  description: 'Vite plugin that injects AdSentinel\'s two serving tags into the app\'s HTML <head> at build and in dev, fail-open, built on @adsentinel/plugin-core.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'adsentinel',
    'adblock-recovery',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/D-Block-Georges/AdSentinel',
    npm: 'https://www.npmjs.com/package/@adsentinel/vite',
    website: 'https://page-kit.io',
  },
  source: {
    github: 'D-Block-Georges/AdSentinel',
    npm: '@adsentinel/vite',
  },
})
