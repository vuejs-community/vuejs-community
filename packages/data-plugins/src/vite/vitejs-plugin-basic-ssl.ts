import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@vitejs/plugin-basic-ssl',
  description: 'A Vite plugin to generate untrusted certificates for HTTPS dev servers',
  version: '2.3.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'certificate',
    'https',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vitejs/vite-plugin-basic-ssl',
    npm: 'https://www.npmjs.com/package/@vitejs/plugin-basic-ssl',
  },
  stats: {
    downloads: {
      monthly: 23407807,
      weekly: 5978763,
    },
  },
})
