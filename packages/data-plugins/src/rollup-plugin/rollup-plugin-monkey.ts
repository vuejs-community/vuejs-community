import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-monkey',
  description: 'rollup plugin for GM_Script',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
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
  links: {
    github: 'https://github.com/wdssmq/rollup-plugin-monkey',
    npm: 'https://www.npmjs.com/package/rollup-plugin-monkey',
    website: 'https://github.com/wdssmq/rollup-plugin-monkey#readme',
  },
  source: {
    github: 'wdssmq/rollup-plugin-monkey',
    npm: 'rollup-plugin-monkey',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 43,
      weekly: 4,
    },
  },
})
