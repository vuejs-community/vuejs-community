import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-byteguard',
  description: 'Vite plugin that encodes JS bundles into binary format for casual source code protection',
  icon: 'logos:vite-icon',
  version: '0.4.1',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'firejune/byteguard',
    npm: 'vite-plugin-byteguard',
  },
  links: {
    github: 'https://github.com/firejune/byteguard',
    npm: 'https://www.npmjs.com/package/vite-plugin-byteguard',
  },
  stats: {
    downloads: {
      monthly: 583,
      weekly: 95,
    },
  },
})
