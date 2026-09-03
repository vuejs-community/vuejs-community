import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'alloy-di',
  description: 'A build-time dependency injection plugin for TypeScript apps',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'dependency-injection',
    'di',
    'rspack',
    'typescript',
    'vite',
    'vite-plugin',
    'webpack',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ciddan/alloy-di',
    npm: 'https://www.npmjs.com/package/alloy-di',
  },
  stats: {
    downloads: {
      monthly: 66,
      weekly: 10,
    },
  },
})
