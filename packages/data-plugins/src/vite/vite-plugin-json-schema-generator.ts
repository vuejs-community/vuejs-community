import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-json-schema-generator',
  description: 'Vite plugin to generate a JSON schema from a TypeScript type definition',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'json',
    'schema',
    'typescript',
    'ts-json-schema-generator',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/samuelneff/vite-plugin-json-schema-generator',
    npm: 'https://www.npmjs.com/package/vite-plugin-json-schema-generator',
  },
  stats: {
    downloads: {
      monthly: 19,
      weekly: 4,
    },
  },
})
