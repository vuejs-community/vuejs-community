import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-monkey',
  description: 'rollup plugin for GM_Script',
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
  links: {
    github: 'https://github.com/wdssmq/rollup-plugin-monkey',
    npm: 'https://www.npmjs.com/package/rollup-plugin-monkey',
  },
  stats: {
    downloads: {
      monthly: 84,
      weekly: 17,
    },
  },
})
