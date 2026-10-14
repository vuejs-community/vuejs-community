import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@quoxai/quox-plugin-vite',
  description: 'Vite plugin and CLI for building, previewing in a sandbox, validating and signing QuoxCORE community plugins',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'quox',
    'quoxcore',
    'plugin',
    'vite',
    'vite-plugin',
    'sandbox',
    'ed25519',
  ],
  links: {
    github: 'https://github.com/quoxai/quox-plugin-sdk',
    npm: 'https://www.npmjs.com/package/@quoxai/quox-plugin-vite',
    website: 'https://quox.ai/docs/plugin-sdk',
  },
  source: {
    github: 'quoxai/quox-plugin-sdk',
    npm: '@quoxai/quox-plugin-vite',
  },
})
