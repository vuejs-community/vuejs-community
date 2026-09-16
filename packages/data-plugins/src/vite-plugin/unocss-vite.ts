import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@unocss/vite',
  description: 'The Vite plugin for UnoCSS',
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
    github: 'unocss/unocss',
    npm: '@unocss/vite',
  },
  links: {
    github: 'https://github.com/unocss/unocss',
    npm: 'https://www.npmjs.com/package/@unocss/vite',
    website: 'https://unocss.dev',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1847254,
      weekly: 369988,
    },
  },
})
