import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-iconify-plus',
  description: 'A vite plugin that loads iconify icons from projects on demand to support iconify icons for use in environments where the public network is not accessible',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'front-end',
    'html',
    'iconify',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cMing1997/vite-plugin-iconify-plus',
    npm: 'https://www.npmjs.com/package/vite-plugin-iconify-plus',
  },
  stats: {
    downloads: {
      monthly: 105,
      weekly: 22,
    },
  },
})
