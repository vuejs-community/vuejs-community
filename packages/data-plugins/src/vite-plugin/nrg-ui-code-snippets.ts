import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nrg-ui/code-snippets',
  description: 'Extract code snippets from your source files for runtime rendering in Vite-powered apps.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'code',
    'snippets',
    'virtual-module',
    'hot-reload',
  ],
  links: {
    github: 'https://github.com/knoxville-utilities-board/nrg-ui',
    npm: 'https://www.npmjs.com/package/@nrg-ui/code-snippets',
    website: 'https://github.com/knoxville-utilities-board/nrg-ui#readme',
  },
  source: {
    github: 'knoxville-utilities-board/nrg-ui',
    npm: '@nrg-ui/code-snippets',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 40,
      weekly: 1,
    },
  },
})
