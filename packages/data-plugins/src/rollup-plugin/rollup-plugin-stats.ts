import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-stats',
  description: 'Vite/Rolldown/Rollup plugin to generate bundle stats JSON file',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'vite',
    'rolldown',
    'rollup',
    'vite-plugin',
    'rolldown-plugin',
    'rollup-plugin',
    'bundle-stats',
  ],
  source: {
    github: 'relative-ci/rollup-plugin-stats',
    npm: 'rollup-plugin-stats',
  },
  links: {
    github: 'https://github.com/relative-ci/rollup-plugin-stats',
    npm: 'https://www.npmjs.com/package/rollup-plugin-stats',
    website: 'https://github.com/relative-ci/rollup-plugin-stats#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 914964,
      weekly: 178354,
    },
  },
})
