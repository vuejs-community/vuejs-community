import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'magebook',
  description: 'Interactive fiction editor',
  version: '1.2.19',
  category: 'plugin',
  tags: [
    'lgl',
    'librogamesland',
    'librogame',
    'gamebook',
    'editor',
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/librogamesland/magebook',
    npm: 'https://www.npmjs.com/package/magebook',
  },
  stats: {
    downloads: {
      monthly: 177,
      weekly: 26,
    },
  },
})
