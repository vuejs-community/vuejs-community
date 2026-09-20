import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jt-home/module-federation-vite',
  description: 'Vite plugin for Module Federation',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'module federation',
    'microfrontend',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@jt-home/module-federation-vite',
  },
  source: {
    npm: '@jt-home/module-federation-vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 5,
    },
  },
})
