import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-manifest-sri-with-transformer',
  description: 'Subresource Integrity hashes for the Vite.js manifest.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'sri',
    'security',
    'subresource integrity',
    'build',
    'vite',
    'vite-plugin',
    'vitejs',
    'plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/AlexMeuer/vite-plugin-manifest-sri',
    npm: 'https://www.npmjs.com/package/vite-plugin-manifest-sri-with-transformer',
  },
  stats: {
    downloads: {
      monthly: 140,
      weekly: 28,
    },
  },
})
