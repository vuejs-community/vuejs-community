import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-proxy-dynamic-import',
  description: 'Bundle static imported bindings from modules which will be dynamically imported somewhere, and treeshake those static imported bindings from the dynamic imported modules',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'proxy-dynamic-import',
  ],
  source: {
    github: 'ydcjeff/rollup-plugin-proxy-dynamic-import',
    npm: 'rollup-plugin-proxy-dynamic-import',
  },
  links: {
    github: 'https://github.com/ydcjeff/rollup-plugin-proxy-dynamic-import',
    npm: 'https://www.npmjs.com/package/rollup-plugin-proxy-dynamic-import',
    website: 'https://github.com/ydcjeff/rollup-plugin-proxy-dynamic-import#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 19,
      weekly: 3,
    },
  },
})
