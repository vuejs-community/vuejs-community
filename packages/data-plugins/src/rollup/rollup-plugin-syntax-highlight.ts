import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-syntax-highlight',
  description: 'A plugin for Vite and Rollup that highlights code using Shiki',
  icon: 'logos:rollupjs',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'shiki',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'valterkraemer/rollup-plugin-syntax-highlight',
    npm: 'rollup-plugin-syntax-highlight',
  },
  links: {
    github: 'https://github.com/valterkraemer/rollup-plugin-syntax-highlight',
    npm: 'https://www.npmjs.com/package/rollup-plugin-syntax-highlight',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
