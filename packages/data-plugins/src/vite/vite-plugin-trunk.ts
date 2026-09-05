import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-trunk',
  description: 'Seamlessly embedding WASM components in a Vite project via Trunk.',
  version: '0.0.5',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'truck',
    'wasm',
    'leptos',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/chenhunghan/vite-plugin-trunk',
    npm: 'https://www.npmjs.com/package/vite-plugin-trunk',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 6,
    },
  },
})
