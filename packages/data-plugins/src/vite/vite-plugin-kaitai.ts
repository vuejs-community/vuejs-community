import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-kaitai',
  description: 'Vite plugin for importing Kaitai Struct files directly',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/theaninova/vite-plugin-kaitai',
    npm: 'https://www.npmjs.com/package/vite-plugin-kaitai',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
