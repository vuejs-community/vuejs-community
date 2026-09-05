import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-disable-packages',
  description: 'Replace all `import {a, b, c} from \'myPackage\'` statements with `const a = {}; const b = {}; const c = {};` and so on, effectively disabling those packages.',
  version: '4.0.1',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'disable',
    'fsevents',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/TeleworkInc/rollup-plugin-disable-packages',
    npm: 'https://www.npmjs.com/package/rollup-plugin-disable-packages',
  },
  stats: {
    downloads: {
      monthly: 100,
      weekly: 13,
    },
  },
})
