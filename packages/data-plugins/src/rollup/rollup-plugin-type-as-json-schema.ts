import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-type-as-json-schema',
  description: 'A rollup plugin to load a ts type as json schema object.',
  version: '0.2.6',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'json-schema',
    'typescript',
    'mock',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/wmzy/rollup-plugin-type-as-json-schema',
    npm: 'https://www.npmjs.com/package/rollup-plugin-type-as-json-schema',
  },
  stats: {
    downloads: {
      monthly: 178,
      weekly: 89,
    },
  },
})
