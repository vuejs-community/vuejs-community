import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-uglifier',
  description: 'A Vite plugin for minifying and obfuscating CSS class and ID names in Vue components, reducing bundle size and hindering reverse-engineering.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vue',
    'uglify',
    'uglifier',
    'rename css classes',
    'obfuscator',
    'css',
  ],
  source: {
    github: 'ValerioGc/vite-plugin-uglifier',
    npm: 'vite-plugin-uglifier',
  },
  links: {
    github: 'https://github.com/ValerioGc/vite-plugin-uglifier',
    npm: 'https://www.npmjs.com/package/vite-plugin-uglifier',
    website: 'https://github.com/ValerioGc/vite-plugin-uglifier#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
