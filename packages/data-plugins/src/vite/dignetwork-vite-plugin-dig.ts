import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@dignetwork/vite-plugin-dig',
  description: 'A Vite plugin that makes DIG a first-class deploy target: injects a window.chia dev shim during `vite dev`, wires the build output to a DIG capsule via dig.toml, and ships it on publish with `digstore deploy`. Deploy to a network no host can read, change,',
  version: '0.2.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/DIG-Network/dig-framework-adapters',
    npm: 'https://www.npmjs.com/package/@dignetwork/vite-plugin-dig',
  },
  stats: {
    downloads: {
      monthly: 477,
      weekly: 20,
    },
  },
})
