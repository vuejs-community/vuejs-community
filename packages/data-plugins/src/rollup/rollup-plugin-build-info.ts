import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-build-info',
  description: 'Generate version.txt containing build info when build finished',
  version: '1.0.6',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'build-info',
    'vite',
    'vite-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-build-info',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 3,
    },
  },
})
