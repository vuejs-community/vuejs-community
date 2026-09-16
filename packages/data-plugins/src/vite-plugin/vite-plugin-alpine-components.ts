import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-alpine-components',
  description: 'Vite plugin for alpine-components: serves, minifies, and injects loading states',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'alpine',
    'alpinejs',
    'components',
  ],
  source: {
    github: 'reecelikesramen/alpine-components',
    npm: 'vite-plugin-alpine-components',
  },
  links: {
    github: 'https://github.com/reecelikesramen/alpine-components',
    npm: 'https://www.npmjs.com/package/vite-plugin-alpine-components',
    website: 'https://github.com/reecelikesramen/alpine-components#readme',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
