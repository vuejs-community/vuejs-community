import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bake-alpine-components',
  description: 'Vite plugin that bakes Alpine.js components and directives into static HTML at build time',
  icon: 'logos:vite-icon',
  version: '0.3.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'alpine',
    'alpinejs',
    'static-site',
    'ssg',
    'html',
    'components',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'slotherinee/vite-plugin-bake-alpine-components',
    npm: 'vite-plugin-bake-alpine-components',
  },
  links: {
    github: 'https://github.com/slotherinee/vite-plugin-bake-alpine-components',
    npm: 'https://www.npmjs.com/package/vite-plugin-bake-alpine-components',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 1,
    },
  },
})
