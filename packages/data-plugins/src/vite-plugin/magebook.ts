import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'magebook',
  description: 'Interactive fiction editor',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'lgl',
    'librogamesland',
    'librogame',
    'gamebook',
    'editor',
    'rollup-plugin',
    'vite-plugin',
  ],
  source: {
    github: 'librogamesland/magebook',
    npm: 'magebook',
  },
  links: {
    github: 'https://github.com/librogamesland/magebook',
    npm: 'https://www.npmjs.com/package/magebook',
    website: 'https://librogamesland.github.io/magebook',
  },
  stats: {
    stars: 14,
    downloads: {
      monthly: 106,
      weekly: 15,
    },
  },
})
