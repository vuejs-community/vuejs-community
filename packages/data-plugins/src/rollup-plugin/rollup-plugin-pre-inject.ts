import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-pre-inject',
  description: 'plugin to prepends bundles with custom code (can be used to inject anything)',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    github: 'Lindsay-Needs-Sleep/rollup-plugin-pre-inject',
    npm: 'rollup-plugin-pre-inject',
  },
  links: {
    github: 'https://github.com/Lindsay-Needs-Sleep/rollup-plugin-pre-inject',
    npm: 'https://www.npmjs.com/package/rollup-plugin-pre-inject',
    website: 'https://github.com/Lindsay-Needs-Sleep/rollup-plugin-pre-inject#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
