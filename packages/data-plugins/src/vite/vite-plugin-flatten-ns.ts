import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-flatten-ns',
  description: 'Flatten namespace re-exports (export * as) into individual named exports for RSC compatibility',
  version: '0.2.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'rsc',
    'react-server-components',
    'barrel',
    'namespace',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cyb3rcore/vite-plugin-flatten-ns',
    npm: 'https://www.npmjs.com/package/vite-plugin-flatten-ns',
  },
  stats: {
    downloads: {
      monthly: 37,
      weekly: 3,
    },
  },
})
