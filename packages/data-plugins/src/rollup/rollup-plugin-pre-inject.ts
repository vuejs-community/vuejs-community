import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-pre-inject',
  description: 'plugin to prepends bundles with custom code (can be used to inject anything)',
  version: '4.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
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
