import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-uglifier',
  description: 'A Vite plugin for minifying and obfuscating CSS class and ID names in Vue components, reducing bundle size and hindering reverse-engineering.',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vue',
    'uglify',
    'uglifier',
    'rename css classes',
    'obfuscator',
    'css',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ValerioGc/vite-plugin-uglifier',
    npm: 'https://www.npmjs.com/package/vite-plugin-uglifier',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 3,
    },
  },
})
