import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@wirestate/dev',
  description: 'Development bundler plugins enabling hot reload for Wirestate services',
  version: '1.0.0-experimental.15',
  category: 'plugin',
  tags: [
    'wirestate',
    'hmr',
    'hot-reload',
    'vite-plugin',
    'dependency-injection',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Neloreck/wirestate',
    npm: 'https://www.npmjs.com/package/@wirestate/dev',
  },
  stats: {
    downloads: {
      monthly: 296,
      weekly: 24,
    },
  },
})
