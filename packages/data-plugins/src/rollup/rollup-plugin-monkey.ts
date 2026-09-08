import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-monkey',
  description: 'rollup plugin for GM_Script',
  icon: 'logos:rollupjs',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'GM_Script',
    'Tampermonkey',
    'Violentmonkey',
    'Greasemonkey',
    'UserScripts',
    'UserScript',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'wdssmq/rollup-plugin-monkey',
    npm: 'rollup-plugin-monkey',
  },
  links: {
    github: 'https://github.com/wdssmq/rollup-plugin-monkey',
    npm: 'https://www.npmjs.com/package/rollup-plugin-monkey',
  },
  stats: {
    downloads: {
      monthly: 88,
      weekly: 17,
    },
  },
})
