import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-alpine-components',
  description: 'Vite plugin for alpine-components: serves, minifies, and injects loading states',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'alpine',
    'alpinejs',
    'components',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/reecelikesramen/alpine-components',
    npm: 'https://www.npmjs.com/package/vite-plugin-alpine-components',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 5,
    },
  },
})
