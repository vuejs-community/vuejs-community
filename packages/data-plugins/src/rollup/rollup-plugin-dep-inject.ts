import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dep-inject',
  description: 'A rollup plugin that uses your externally defined modules and injects their unpkg cdn equivalent into an index entry file.',
  icon: 'logos:rollupjs',
  version: '0.2.6',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'module injection',
    'dependency injection',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'panoply/rollup-plugin-dep-inject',
    npm: 'rollup-plugin-dep-inject',
  },
  links: {
    github: 'https://github.com/panoply/rollup-plugin-dep-inject',
    npm: 'https://www.npmjs.com/package/rollup-plugin-dep-inject',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 2,
    },
  },
})
