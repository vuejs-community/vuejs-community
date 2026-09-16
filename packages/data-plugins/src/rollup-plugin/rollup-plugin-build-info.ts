import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-build-info',
  description: 'Generate version.txt containing build info when build finished',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'build-info',
    'vite',
    'vite-plugin',
  ],
  source: {
    npm: 'rollup-plugin-build-info',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-build-info',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 3,
    },
  },
})
