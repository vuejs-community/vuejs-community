import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@seedprotocol/vite',
  description: 'Vite plugin for browser apps using @seedprotocol/sdk: Node polyfills, ZenFS aliases, CJS interop fixes and cross-origin isolation headers',
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
    'polyfills',
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
