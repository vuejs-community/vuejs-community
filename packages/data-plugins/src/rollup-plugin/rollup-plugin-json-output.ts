import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-json-output',
  description: 'Convert modules to JSON by serializing their default exports',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'json',
    'output',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/yetdragon/rollup-plugin-json-output',
    npm: 'https://www.npmjs.com/package/rollup-plugin-json-output',
    website: 'https://github.com/yetdragon/rollup-plugin-json-output#readme',
  },
  source: {
    github: 'yetdragon/rollup-plugin-json-output',
    npm: 'rollup-plugin-json-output',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
