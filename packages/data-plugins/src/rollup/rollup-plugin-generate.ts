import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-generate',
  description: 'Generate files on the fly with Rollup.',
  icon: 'logos:rollupjs',
  version: '1.3.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: '',
    npm: 'rollup-plugin-generate',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-generate',
  },
  stats: {
    downloads: {
      monthly: 59,
      weekly: 4,
    },
  },
})
