import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-pre-inject',
  description: 'plugin to prepends bundles with custom code (can be used to inject anything)',
  icon: 'logos:rollupjs',
  version: '4.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'Lindsay-Needs-Sleep/rollup-plugin-pre-inject',
    npm: 'rollup-plugin-pre-inject',
  },
  links: {
    github: 'https://github.com/Lindsay-Needs-Sleep/rollup-plugin-pre-inject',
    npm: 'https://www.npmjs.com/package/rollup-plugin-pre-inject',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
