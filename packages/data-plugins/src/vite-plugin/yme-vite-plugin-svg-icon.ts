import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@yme/vite-plugin-svg-icon',
  description: 'a vite plugin for svg icons, generate a svg sprite file and a helper function to use it',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'minosss/vite-plugins',
    npm: '@yme/vite-plugin-svg-icon',
  },
  links: {
    github: 'https://github.com/minosss/vite-plugins',
    npm: 'https://www.npmjs.com/package/@yme/vite-plugin-svg-icon',
    website: 'https://github.com/minosss/vite-plugins#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
