import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@seedprotocol/vite',
  description: 'Vite plugin for browser apps using @seedprotocol/sdk: cross-origin isolation headers, ES module workers, linked-install support, and opt-in Node polyfills',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'seed-protocol',
    'vite',
    'vite-plugin',
    'zenfs',
    'opfs',
    'sqlite-wasm',
    'cross-origin-isolation',
  ],
  links: {
    github: 'https://github.com/JournoLabs/seed-protocol-sdk',
    npm: 'https://www.npmjs.com/package/@seedprotocol/vite',
    website: 'https://github.com/JournoLabs/seed-protocol-sdk/tree/main/packages/vite#readme',
  },
  source: {
    github: 'JournoLabs/seed-protocol-sdk',
    npm: '@seedprotocol/vite',
  },
})
