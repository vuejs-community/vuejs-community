import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@web2paper/vite-plugin-ts-schema',
  description: 'Vite plugin to generate a JSON schema from a typescript type.',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'web2paper',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@web2paper/vite-plugin-ts-schema',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 8,
    },
  },
})
