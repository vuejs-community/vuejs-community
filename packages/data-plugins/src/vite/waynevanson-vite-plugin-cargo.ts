import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@waynevanson/vite-plugin-cargo',
  description: 'Import wasm_bingen compatible Rust to JavaScript via Vite',
  version: '4.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/waynevanson/vite-plugin-cargo',
    npm: 'https://www.npmjs.com/package/@waynevanson/vite-plugin-cargo',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
