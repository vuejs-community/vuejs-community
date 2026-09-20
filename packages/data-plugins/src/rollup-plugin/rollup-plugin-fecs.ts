import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-fecs',
  description: 'Verify entry point and all imported files with fecs',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'fecs',
    'lint',
  ],
  links: {
    github: 'https://github.com/SidKwok/rollup-plugin-fecs',
    npm: 'https://www.npmjs.com/package/rollup-plugin-fecs',
    website: 'https://github.com/SidKwok/rollup-plugin-fecs#readme',
  },
  source: {
    github: 'SidKwok/rollup-plugin-fecs',
    npm: 'rollup-plugin-fecs',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 4,
    },
  },
})
