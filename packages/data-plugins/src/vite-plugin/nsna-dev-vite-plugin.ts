import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nsna-dev/vite-plugin',
  description: 'Official Vite plugin for NSNA .ns files with HMR and SPA routing',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'nsna',
    'vite',
    'vite-plugin',
    'ns',
    'compiler',
  ],
  source: {
    github: 'nsna-lang/nsna',
    npm: '@nsna-dev/vite-plugin',
  },
  links: {
    github: 'https://github.com/nsna-lang/nsna',
    npm: 'https://www.npmjs.com/package/@nsna-dev/vite-plugin',
    website: 'https://github.com/nsna-lang/nsna#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
