import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@smoothtml/vite-plugin-sri',
  description: 'Vite plugin that adds Subresource Integrity (SRI) hashes to scripts and stylesheets in built HTML.',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'sri',
    'subresource-integrity',
    'integrity',
    'csp',
    'security',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/smoothtml/vite-plugin-sri',
    npm: 'https://www.npmjs.com/package/@smoothtml/vite-plugin-sri',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 3,
    },
  },
})
