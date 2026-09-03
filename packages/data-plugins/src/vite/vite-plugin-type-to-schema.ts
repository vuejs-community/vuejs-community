import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-type-to-schema',
  description: '> Plugin that converts types to JSON Schemas just via suffixed import',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'type-to-schema',
    'vite-plugin-type-to-schema',
    'ts-json-schema-generator',
    'ts-to-json-schema',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/TheLucifurry/vite-plugin-type-to-schema',
    npm: 'https://www.npmjs.com/package/vite-plugin-type-to-schema',
  },
  stats: {
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
