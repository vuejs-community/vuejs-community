import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'alloy-di',
  description: 'A build-time dependency injection plugin for TypeScript apps',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'dependency-injection',
    'di',
    'rspack',
    'typescript',
    'vite',
    'vite-plugin',
    'webpack',
  ],
  source: {
    github: 'ciddan/alloy-di',
    npm: 'alloy-di',
  },
  links: {
    github: 'https://github.com/ciddan/alloy-di',
    npm: 'https://www.npmjs.com/package/alloy-di',
    website: 'https://alloy-di.dev',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 59,
      weekly: 2,
    },
  },
})
