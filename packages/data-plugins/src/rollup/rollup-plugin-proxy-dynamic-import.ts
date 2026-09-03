import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-proxy-dynamic-import',
  description: 'Bundle static imported bindings from modules which will be dynamically imported somewhere, and treeshake those static imported bindings from the dynamic imported modules',
  version: '0.1.9',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'proxy-dynamic-import',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/ydcjeff/rollup-plugin-proxy-dynamic-import',
    npm: 'https://www.npmjs.com/package/rollup-plugin-proxy-dynamic-import',
  },
  stats: {
    downloads: {
      monthly: 28,
      weekly: 2,
    },
  },
})
