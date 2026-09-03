import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nsna-dev/vite-plugin',
  description: 'Official Vite plugin for NSNA .ns files with HMR and SPA routing',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'nsna',
    'vite',
    'vite-plugin',
    'ns',
    'compiler',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/nsna-lang/nsna',
    npm: 'https://www.npmjs.com/package/@nsna-dev/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
