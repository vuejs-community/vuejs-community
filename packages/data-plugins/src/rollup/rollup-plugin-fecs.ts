import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-fecs',
  description: 'Verify entry point and all imported files with fecs',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'fecs',
    'lint',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/SidKwok/rollup-plugin-fecs',
    npm: 'https://www.npmjs.com/package/rollup-plugin-fecs',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 6,
    },
  },
})
