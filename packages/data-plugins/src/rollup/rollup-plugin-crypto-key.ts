import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-crypto-key',
  description: '🔑 A Rollup plugin for key management',
  icon: 'logos:rollupjs',
  version: '0.5.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'xiaohe0601/virtual-crypto-key',
    npm: 'rollup-plugin-crypto-key',
  },
  links: {
    github: 'https://github.com/xiaohe0601/virtual-crypto-key',
    npm: 'https://www.npmjs.com/package/rollup-plugin-crypto-key',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 1,
    },
  },
})
