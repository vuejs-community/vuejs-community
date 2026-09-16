import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-json-schema-generator',
  description: 'Vite plugin to generate a JSON schema from a TypeScript type definition',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'json',
    'schema',
    'typescript',
    'ts-json-schema-generator',
  ],
  source: {
    github: 'samuelneff/vite-plugin-json-schema-generator',
    npm: 'vite-plugin-json-schema-generator',
  },
  links: {
    github: 'https://github.com/samuelneff/vite-plugin-json-schema-generator',
    npm: 'https://www.npmjs.com/package/vite-plugin-json-schema-generator',
    website: 'https://github.com/samuelneff/vite-plugin-json-schema-generator#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
