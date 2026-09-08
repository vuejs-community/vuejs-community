import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-power-assert',
  description: 'power-assert rollup plugin',
  icon: 'logos:rollupjs',
  version: '0.2.2',
  category: 'plugin',
  tags: [
    'power-assert',
    'assert',
    'assertion',
    'test',
    'testing',
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'twada/power-assert-monorepo',
    npm: 'rollup-plugin-power-assert',
  },
  links: {
    github: 'https://github.com/twada/power-assert-monorepo',
    npm: 'https://www.npmjs.com/package/rollup-plugin-power-assert',
  },
  stats: {
    downloads: {
      monthly: 417,
      weekly: 52,
    },
  },
})
