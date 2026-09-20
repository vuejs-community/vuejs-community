import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dep-inject',
  description: 'A rollup plugin that uses your externally defined modules and injects their unpkg cdn equivalent into an index entry file.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'module injection',
    'dependency injection',
  ],
  links: {
    github: 'https://github.com/panoply/rollup-plugin-dep-inject',
    npm: 'https://www.npmjs.com/package/rollup-plugin-dep-inject',
    website: 'https://github.com/panoply/rollup-plugin-dep-inject',
  },
  source: {
    github: 'panoply/rollup-plugin-dep-inject',
    npm: 'rollup-plugin-dep-inject',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 25,
      weekly: 2,
    },
  },
})
