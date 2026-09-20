import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-protobuf',
  description: 'Vite plugin that automatically compiles .proto files to TypeScript clients',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
  ],
  links: {
    github: 'https://github.com/w4g1/vite-plugin-protobuf',
    npm: 'https://www.npmjs.com/package/vite-plugin-protobuf',
    website: 'https://github.com/w4g1/vite-plugin-protobuf',
  },
  source: {
    github: 'w4g1/vite-plugin-protobuf',
    npm: 'vite-plugin-protobuf',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 69,
      weekly: 1,
    },
  },
})
