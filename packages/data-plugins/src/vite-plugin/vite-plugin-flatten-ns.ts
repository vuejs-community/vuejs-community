import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-flatten-ns',
  description: 'Flatten namespace re-exports (export * as) into individual named exports for RSC compatibility',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'rsc',
    'react-server-components',
    'barrel',
    'namespace',
  ],
  source: {
    github: 'cyb3rcore/vite-plugin-flatten-ns',
    npm: 'vite-plugin-flatten-ns',
  },
  links: {
    github: 'https://github.com/cyb3rcore/vite-plugin-flatten-ns',
    npm: 'https://www.npmjs.com/package/vite-plugin-flatten-ns',
    website: 'https://github.com/cyb3rcore/vite-plugin-flatten-ns#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 24,
      weekly: 1,
    },
  },
})
