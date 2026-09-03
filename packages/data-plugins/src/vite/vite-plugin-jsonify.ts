import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-jsonify',
  description: 'Emits any JS/TS file exports as a JSON asset while preserving all bundling features including content hash',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ebrahimmfadae/vite-plugin-jsonify',
    npm: 'https://www.npmjs.com/package/vite-plugin-jsonify',
  },
  stats: {
    downloads: {
      monthly: 33,
      weekly: 7,
    },
  },
})
