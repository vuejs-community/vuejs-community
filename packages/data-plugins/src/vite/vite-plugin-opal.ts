import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-opal',
  description: 'Vite plugin for Opal - Compile Ruby to JavaScript',
  version: '0.3.15',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'opal',
    'ruby',
    'javascript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/stofu1234/opal-vite',
    npm: 'https://www.npmjs.com/package/vite-plugin-opal',
  },
  stats: {
    downloads: {
      monthly: 153,
      weekly: 13,
    },
  },
})
