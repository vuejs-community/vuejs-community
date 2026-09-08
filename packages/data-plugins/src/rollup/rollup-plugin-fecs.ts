import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-fecs',
  description: 'Verify entry point and all imported files with fecs',
  icon: 'logos:rollupjs',
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
  source: {
    github: 'SidKwok/rollup-plugin-fecs',
    npm: 'rollup-plugin-fecs',
  },
  links: {
    github: 'https://github.com/SidKwok/rollup-plugin-fecs',
    npm: 'https://www.npmjs.com/package/rollup-plugin-fecs',
  },
  stats: {
    downloads: {
      monthly: 18,
      weekly: 1,
    },
  },
})
