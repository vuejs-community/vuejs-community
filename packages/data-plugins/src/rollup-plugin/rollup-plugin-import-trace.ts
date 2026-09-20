import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-import-trace',
  description: 'Rollup/Vite plugin to track import chains for better error debugging',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  links: {
    github: 'https://github.com/privatenumber/rollup-plugin-import-trace',
    npm: 'https://www.npmjs.com/package/rollup-plugin-import-trace',
    website: 'https://github.com/privatenumber/rollup-plugin-import-trace#readme',
  },
  source: {
    github: 'privatenumber/rollup-plugin-import-trace',
    npm: 'rollup-plugin-import-trace',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 108159,
      weekly: 22079,
    },
  },
})
