import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-protobuf',
  description: 'Vite plugin that automatically compiles .proto files to TypeScript clients',
  version: '0.0.31',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/w4g1/vite-plugin-protobuf',
    npm: 'https://www.npmjs.com/package/vite-plugin-protobuf',
  },
  stats: {
    downloads: {
      monthly: 114,
      weekly: 10,
    },
  },
})
