import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-byteguard',
  description: 'Vite plugin that encodes JS bundles into binary format for casual source code protection',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'bytecode',
    'binary',
    'protection',
    'obfuscation',
    'source-protection',
    'bundle-guard',
    'capacitor',
    'electron',
  ],
  source: {
    github: 'firejune/byteguard',
    npm: 'vite-plugin-byteguard',
  },
  links: {
    github: 'https://github.com/firejune/byteguard',
    npm: 'https://www.npmjs.com/package/vite-plugin-byteguard',
    website: 'https://github.com/firejune/byteguard#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 602,
      weekly: 48,
    },
  },
})
