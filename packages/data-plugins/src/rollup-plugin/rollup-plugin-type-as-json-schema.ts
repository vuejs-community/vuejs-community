import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-type-as-json-schema',
  description: 'A rollup plugin to load a ts type as json schema object.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'json-schema',
    'typescript',
    'mock',
  ],
  links: {
    github: 'https://github.com/wmzy/rollup-plugin-type-as-json-schema',
    npm: 'https://www.npmjs.com/package/rollup-plugin-type-as-json-schema',
    website: 'https://github.com/wmzy/rollup-plugin-type-as-json-schema',
  },
  source: {
    github: 'wmzy/rollup-plugin-type-as-json-schema',
    npm: 'rollup-plugin-type-as-json-schema',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 241,
      weekly: 32,
    },
  },
})
