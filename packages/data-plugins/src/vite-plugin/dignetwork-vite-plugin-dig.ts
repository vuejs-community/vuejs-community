import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dignetwork/vite-plugin-dig',
  description: 'A Vite plugin that makes DIG a first-class deploy target: injects a window.chia dev shim during `vite dev`, wires the build output to a DIG capsule via dig.toml, and ships it on publish with `digstore deploy`. Deploy to a network no host can read, change,',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'dig',
    'dig-network',
    'chia',
    'vite',
    'vite-plugin',
    'deploy',
    'capsule',
    'wallet',
    'window.chia',
    'decentralized',
  ],
  links: {
    github: 'https://github.com/DIG-Network/dig-framework-adapters',
    npm: 'https://www.npmjs.com/package/@dignetwork/vite-plugin-dig',
    website: 'https://github.com/DIG-Network/dig-framework-adapters/tree/main/packages/vite-plugin-dig#readme',
  },
  source: {
    github: 'DIG-Network/dig-framework-adapters',
    npm: '@dignetwork/vite-plugin-dig',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 409,
      weekly: 181,
    },
  },
})
