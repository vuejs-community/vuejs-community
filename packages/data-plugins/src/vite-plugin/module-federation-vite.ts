import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@module-federation/vite',
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
  source: {
    github: 'module-federation/vite',
    npm: '@module-federation/vite',
  },
  links: {
    github: 'https://github.com/module-federation/vite',
    npm: 'https://www.npmjs.com/package/@module-federation/vite',
    website: 'https://github.com/module-federation/vite#readme',
  },
  stats: {
    stars: 873,
    downloads: {
      monthly: 3297476,
      weekly: 646113,
    },
  },
})
