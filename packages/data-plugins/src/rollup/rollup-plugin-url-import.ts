import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-url-import',
  description: 'Rollup plugin that resolves url imports',
  version: '0.4.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'url-import',
    'import-url',
    'deno',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/thgh/rollup-plugin-url-import',
    npm: 'https://www.npmjs.com/package/rollup-plugin-url-import',
  },
  stats: {
    downloads: {
      monthly: 96,
      weekly: 64,
    },
  },
})
