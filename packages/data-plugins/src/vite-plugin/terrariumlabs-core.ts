import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@terrariumlabs/core',
  description: 'A complete EVM chain inside the page, presented to your dapp as a wallet. revm in WebAssembly, real receipts, byte-identical to Anvil.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ethereum',
    'evm',
    'revm',
    'wasm',
    'eip-1193',
    'eip-6963',
    'wallet',
    'dapp',
    'testing',
    'simulator',
    'anvil',
    'vite-plugin',
    'uniswap',
  ],
  source: {
    github: 'damarnez/terrarium',
    npm: '@terrariumlabs/core',
  },
  links: {
    github: 'https://github.com/damarnez/terrarium',
    npm: 'https://www.npmjs.com/package/@terrariumlabs/core',
    website: 'https://github.com/damarnez/terrarium#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 92,
      weekly: 92,
    },
  },
})
