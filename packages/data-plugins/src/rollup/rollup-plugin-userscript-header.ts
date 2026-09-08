import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-userscript-header',
  description: 'Rollup plugin for generating userscript headers',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'userscript',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'NotOats/rollup-plugin-userscript-header',
    npm: 'rollup-plugin-userscript-header',
  },
  links: {
    github: 'https://github.com/NotOats/rollup-plugin-userscript-header',
    npm: 'https://www.npmjs.com/package/rollup-plugin-userscript-header',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
