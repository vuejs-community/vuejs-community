import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-graphql-codegen',
  description: 'Zero-config vite plugin that uses the vite file watcher to run graphql codegen programmatically without needing to start a separate watcher',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'graphql',
    'codegen',
    'graphql-codegen',
    'graphql-code-generator',
    'vite',
    'vite-plugin',
    'vite-plugin-graphql-codegen',
  ],
  links: {
    github: 'https://github.com/danielwaltz/vite-plugin-graphql-codegen',
    npm: 'https://www.npmjs.com/package/vite-plugin-graphql-codegen',
    website: 'https://github.com/danielwaltz/vite-plugin-graphql-codegen#readme',
  },
  source: {
    github: 'danielwaltz/vite-plugin-graphql-codegen',
    npm: 'vite-plugin-graphql-codegen',
  },
  stats: {
    stars: 91,
    downloads: {
      monthly: 229609,
      weekly: 48027,
    },
  },
})
