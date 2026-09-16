import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'msoffice-addin',
  description: 'Microsoft office addin module for Nuxt abd vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'office-addin',
    'nuxt',
    'vite-plugin',
  ],
  source: {
    github: 'dapotatoman/msoffice-addin',
    npm: 'msoffice-addin',
  },
  links: {
    github: 'https://github.com/dapotatoman/msoffice-addin',
    npm: 'https://www.npmjs.com/package/msoffice-addin',
    website: 'https://github.com/dapotatoman/msoffice-addin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 53,
      weekly: 6,
    },
  },
})
