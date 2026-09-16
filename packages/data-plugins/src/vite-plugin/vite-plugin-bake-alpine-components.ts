import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bake-alpine-components',
  description: 'Vite plugin that bakes Alpine.js components and directives into static HTML at build time',
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
    'static-site',
    'ssg',
    'html',
    'components',
  ],
  source: {
    github: 'slotherinee/vite-plugin-bake-alpine-components',
    npm: 'vite-plugin-bake-alpine-components',
  },
  links: {
    github: 'https://github.com/slotherinee/vite-plugin-bake-alpine-components',
    npm: 'https://www.npmjs.com/package/vite-plugin-bake-alpine-components',
    website: 'https://github.com/slotherinee/vite-plugin-bake-alpine-components#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
