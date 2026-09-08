import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-import-trace',
  description: 'Rollup/Vite plugin to track import chains for better error debugging',
  icon: 'logos:rollupjs',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'vite',
    'vite-plugin',
    'import',
    'trace',
    'debug',
    'error',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'privatenumber/rollup-plugin-import-trace',
    npm: 'rollup-plugin-import-trace',
  },
  links: {
    github: 'https://github.com/privatenumber/rollup-plugin-import-trace',
    npm: 'https://www.npmjs.com/package/rollup-plugin-import-trace',
  },
  stats: {
    downloads: {
      monthly: 101645,
      weekly: 25722,
    },
  },
})
