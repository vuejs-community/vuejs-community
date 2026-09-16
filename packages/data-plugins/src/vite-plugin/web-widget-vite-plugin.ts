import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@web-widget/vite-plugin',
  description: 'Vite plugin for Web Router',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    github: 'web-widget/web-widget',
    npm: '@web-widget/vite-plugin',
  },
  links: {
    github: 'https://github.com/web-widget/web-widget',
    npm: 'https://www.npmjs.com/package/@web-widget/vite-plugin',
    website: 'https://github.com/web-widget/web-widget#readme',
  },
  stats: {
    stars: 43,
    downloads: {
      monthly: 703,
      weekly: 321,
    },
  },
})
