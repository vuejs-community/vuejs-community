import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-alpine-components',
  description: 'Vite plugin for alpine-components: serves, minifies, and injects loading states',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'reecelikesramen/alpine-components',
    npm: 'vite-plugin-alpine-components',
  },
  links: {
    github: 'https://github.com/reecelikesramen/alpine-components',
    npm: 'https://www.npmjs.com/package/vite-plugin-alpine-components',
  },
  stats: {
    downloads: {
      monthly: 23,
      weekly: 2,
    },
  },
})
