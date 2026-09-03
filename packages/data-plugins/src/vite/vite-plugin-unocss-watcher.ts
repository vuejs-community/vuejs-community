import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-unocss-watcher',
  description: 'A Vite plugin to reload UnoCSS config when files changed',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'unocss',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ocavue/vite-plugin-unocss-watcher',
    npm: 'https://www.npmjs.com/package/vite-plugin-unocss-watcher',
  },
  stats: {
    downloads: {
      monthly: 45,
      weekly: 7,
    },
  },
})
