import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@eldrex/vite',
  description: 'Vite plugin for DevDiff — automatically runs changelog generation on build',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'changelog',
    'devdiff',
  ],
  links: {
    github: 'https://github.com/EldrexDelosReyesBula/devdiff',
    npm: 'https://www.npmjs.com/package/@eldrex/vite',
    website: 'https://github.com/EldrexDelosReyesBula/devdiff#readme',
  },
  source: {
    github: 'EldrexDelosReyesBula/devdiff',
    npm: '@eldrex/vite',
  },
  stats: {
    stars: 8,
    downloads: {
      monthly: 556,
      weekly: 9,
    },
  },
})
