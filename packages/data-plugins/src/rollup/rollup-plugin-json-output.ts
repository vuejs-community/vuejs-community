import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-json-output',
  description: 'Convert modules to JSON by serializing their default exports',
  icon: 'logos:rollupjs',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'json',
    'output',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'yetdragon/rollup-plugin-json-output',
    npm: 'rollup-plugin-json-output',
  },
  links: {
    github: 'https://github.com/yetdragon/rollup-plugin-json-output',
    npm: 'https://www.npmjs.com/package/rollup-plugin-json-output',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 6,
    },
  },
})
