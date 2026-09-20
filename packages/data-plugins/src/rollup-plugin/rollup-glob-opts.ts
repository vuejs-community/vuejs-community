import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-glob-opts',
  description: 'Helps maintaining many Rollup build targets by using file glob patterns.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'expand',
    'files',
    'glob',
  ],
  links: {
    github: 'https://github.com/prantlf/rollup-glob-opts',
    npm: 'https://www.npmjs.com/package/rollup-glob-opts',
    website: 'https://github.com/prantlf/rollup-glob-opts#readme',
  },
  source: {
    github: 'prantlf/rollup-glob-opts',
    npm: 'rollup-glob-opts',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 11,
      weekly: 4,
    },
  },
})
