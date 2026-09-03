import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@eldrex/vite',
  description: 'Vite plugin for DevDiff — automatically runs changelog generation on build',
  version: '1.9.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'changelog',
    'devdiff',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/EldrexDelosReyesBula/devdiff',
    npm: 'https://www.npmjs.com/package/@eldrex/vite',
  },
  stats: {
    downloads: {
      monthly: 947,
      weekly: 220,
    },
  },
})
