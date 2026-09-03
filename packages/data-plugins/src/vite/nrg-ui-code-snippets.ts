import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@nrg-ui/code-snippets',
  description: 'Extract code snippets from your source files for runtime rendering in Vite-powered apps.',
  version: '0.5.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'code',
    'snippets',
    'virtual-module',
    'hot-reload',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/knoxville-utilities-board/nrg-ui',
    npm: 'https://www.npmjs.com/package/@nrg-ui/code-snippets',
  },
  stats: {
    downloads: {
      monthly: 45,
      weekly: 7,
    },
  },
})
