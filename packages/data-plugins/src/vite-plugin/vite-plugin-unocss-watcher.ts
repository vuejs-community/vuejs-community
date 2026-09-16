import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-unocss-watcher',
  description: 'A Vite plugin to reload UnoCSS config when files changed',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'unocss',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'ocavue/vite-plugin-unocss-watcher',
    npm: 'vite-plugin-unocss-watcher',
  },
  links: {
    github: 'https://github.com/ocavue/vite-plugin-unocss-watcher',
    npm: 'https://www.npmjs.com/package/vite-plugin-unocss-watcher',
    website: 'https://github.com/ocavue/vite-plugin-unocss-watcher#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 40,
      weekly: 6,
    },
  },
})
