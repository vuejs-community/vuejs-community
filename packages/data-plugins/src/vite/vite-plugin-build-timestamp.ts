import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-timestamp',
  description: 'Generate a meta tag with the build time in the head of the HTML during the build process',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/nqdy666/vite-plugin-build-timestamp',
    npm: 'https://www.npmjs.com/package/vite-plugin-build-timestamp',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 2,
    },
  },
})
