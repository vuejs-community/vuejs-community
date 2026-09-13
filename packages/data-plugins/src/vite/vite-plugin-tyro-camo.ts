import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tyro-camo',
  description: 'Stealth asset camouflage for Laravel and Vite: cloak compiled JS/CSS bundles under deterministic, inoffensive codenames while keeping manifest.json intact.',
  icon: 'logos:vite-icon',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'laravel',
    'obfuscation',
    'camouflage',
    'assets',
    'manifest',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'hasinhayder/tyro-camo',
    npm: 'vite-plugin-tyro-camo',
  },
  links: {
    github: 'https://github.com/hasinhayder/tyro-camo',
    npm: 'https://www.npmjs.com/package/vite-plugin-tyro-camo',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
