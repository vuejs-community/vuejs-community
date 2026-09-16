import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@wq/rollup-plugin',
  description: 'Build custom wq plugins that integrate with wq.js',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'wq',
    'build',
    'rollup',
    'rollup-plugin',
    'bundle',
    'virtual',
  ],
  source: {
    github: 'wq/wq.create',
    npm: '@wq/rollup-plugin',
  },
  links: {
    github: 'https://github.com/wq/wq.create',
    npm: 'https://www.npmjs.com/package/@wq/rollup-plugin',
    website: 'https://wq.io/@wq/rollup-plugin',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 125,
      weekly: 20,
    },
  },
})
