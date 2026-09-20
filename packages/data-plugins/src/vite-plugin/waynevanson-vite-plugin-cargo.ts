import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@waynevanson/vite-plugin-cargo',
  description: 'Import wasm_bingen compatible Rust to JavaScript via Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/waynevanson/vite-plugin-cargo',
    npm: 'https://www.npmjs.com/package/@waynevanson/vite-plugin-cargo',
    website: 'https://github.com/waynevanson/vite-plugin-cargo#readme',
  },
  source: {
    github: 'waynevanson/vite-plugin-cargo',
    npm: '@waynevanson/vite-plugin-cargo',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 22,
      weekly: 2,
    },
  },
})
