import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-url-import',
  description: 'Rollup plugin that resolves url imports',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'url-import',
    'import-url',
    'deno',
  ],
  source: {
    github: 'thgh/rollup-plugin-url-import',
    npm: 'rollup-plugin-url-import',
  },
  links: {
    github: 'https://github.com/thgh/rollup-plugin-url-import',
    npm: 'https://www.npmjs.com/package/rollup-plugin-url-import',
    website: 'https://github.com/thgh/rollup-plugin-url-import',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 118,
      weekly: 5,
    },
  },
})
