import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-kaitai',
  description: 'Vite plugin for importing Kaitai Struct files directly',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/theaninova/vite-plugin-kaitai',
    npm: 'https://www.npmjs.com/package/vite-plugin-kaitai',
  },
  source: {
    github: 'theaninova/vite-plugin-kaitai',
    npm: 'vite-plugin-kaitai',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
