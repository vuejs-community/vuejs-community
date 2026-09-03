import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-pack-info',
  description: 'Vite plugin generates an information file or fingerprint of a package after the construction is complete',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'version',
    'pack',
    'vite',
    'plugin',
    'vite-plugin',
    'files',
    'output',
    'packager',
    'bundler',
    'compressing',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/laibin-wang/vite-plugin-pack-info',
    npm: 'https://www.npmjs.com/package/vite-plugin-pack-info',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
