import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-type-to-schema',
  description: '> Plugin that converts types to JSON Schemas just via suffixed import',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'type-to-schema',
    'vite-plugin-type-to-schema',
    'ts-json-schema-generator',
    'ts-to-json-schema',
  ],
  source: {
    github: 'TheLucifurry/vite-plugin-type-to-schema',
    npm: 'vite-plugin-type-to-schema',
  },
  links: {
    github: 'https://github.com/TheLucifurry/vite-plugin-type-to-schema',
    npm: 'https://www.npmjs.com/package/vite-plugin-type-to-schema',
    website: 'https://github.com/TheLucifurry/vite-plugin-type-to-schema#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
