import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-import-meta-url-to-module',
  description: 'Transform `new URL(..., import.meta.url)` to `import` statement',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite',
  ],
  source: {
    github: 'jiangfengming/rollup-plugin-import-meta-url-to-module',
    npm: 'rollup-plugin-import-meta-url-to-module',
  },
  links: {
    github: 'https://github.com/jiangfengming/rollup-plugin-import-meta-url-to-module',
    npm: 'https://www.npmjs.com/package/rollup-plugin-import-meta-url-to-module',
    website: 'https://github.com/jiangfengming/rollup-plugin-import-meta-url-to-module#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 5,
    },
  },
})
