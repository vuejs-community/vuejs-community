import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-transform-imports',
  description: 'Transforms member style imports into default style imports',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/justforuse/vite-plugin-transform-imports',
    npm: 'https://www.npmjs.com/package/vite-plugin-transform-imports',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
