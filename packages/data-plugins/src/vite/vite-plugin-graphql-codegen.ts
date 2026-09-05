import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-graphql-codegen',
  description: 'Zero-config vite plugin that uses the vite file watcher to run graphql codegen programmatically without needing to start a separate watcher',
  version: '4.0.1',
  category: 'plugin',
  tags: [
    'graphql',
    'codegen',
    'graphql-codegen',
    'graphql-code-generator',
    'vite',
    'vite-plugin',
    'vite-plugin-graphql-codegen',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/danielwaltz/vite-plugin-graphql-codegen',
    npm: 'https://www.npmjs.com/package/vite-plugin-graphql-codegen',
  },
  stats: {
    downloads: {
      monthly: 240002,
      weekly: 59263,
    },
  },
})
