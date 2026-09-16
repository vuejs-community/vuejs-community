import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-disable-packages',
  description: 'Replace all `import {a, b, c} from \'myPackage\'` statements with `const a = {}; const b = {}; const c = {};` and so on, effectively disabling those packages.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'disable',
    'fsevents',
  ],
  source: {
    github: 'TeleworkInc/rollup-plugin-disable-packages',
    npm: 'rollup-plugin-disable-packages',
  },
  links: {
    github: 'https://github.com/TeleworkInc/rollup-plugin-disable-packages',
    npm: 'https://www.npmjs.com/package/rollup-plugin-disable-packages',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 33,
      weekly: 3,
    },
  },
})
