import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-jsonify',
  description: 'Emits any JS/TS file exports as a JSON asset while preserving all bundling features including content hash',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ebrahimmfadae/vite-plugin-jsonify',
    npm: 'https://www.npmjs.com/package/vite-plugin-jsonify',
    website: 'https://github.com/ebrahimmfadae/vite-plugin-jsonify#readme',
  },
  source: {
    github: 'ebrahimmfadae/vite-plugin-jsonify',
    npm: 'vite-plugin-jsonify',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 35,
      weekly: 4,
    },
  },
})
