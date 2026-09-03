import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@laynezh/vite-plugin-lib-assets',
  description: 'A Vite Plugin extracts resource files referenced in library mode instead of embedded them as base64.',
  version: '2.1.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'generate lib assets',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/laynezh/vite-plugin-lib-assets',
    npm: 'https://www.npmjs.com/package/@laynezh/vite-plugin-lib-assets',
  },
  stats: {
    downloads: {
      monthly: 139185,
      weekly: 34952,
    },
  },
})
