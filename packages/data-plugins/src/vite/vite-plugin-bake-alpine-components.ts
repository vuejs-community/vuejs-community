import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bake-alpine-components',
  description: 'Vite plugin that bakes Alpine.js components and directives into static HTML at build time',
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
