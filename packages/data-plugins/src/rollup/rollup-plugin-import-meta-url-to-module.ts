import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-import-meta-url-to-module',
  description: 'Transform `new URL(..., import.meta.url)` to `import` statement',
  icon: 'logos:rollupjs',
  version: '0.3.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'jiangfengming/rollup-plugin-import-meta-url-to-module',
    npm: 'rollup-plugin-import-meta-url-to-module',
  },
  links: {
    github: 'https://github.com/jiangfengming/rollup-plugin-import-meta-url-to-module',
    npm: 'https://www.npmjs.com/package/rollup-plugin-import-meta-url-to-module',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 3,
    },
  },
})
