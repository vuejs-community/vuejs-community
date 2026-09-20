import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-syntax-highlight',
  description: 'A plugin for Vite and Rollup that highlights code using Shiki',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'shiki',
  ],
  links: {
    github: 'https://github.com/valterkraemer/rollup-plugin-syntax-highlight',
    npm: 'https://www.npmjs.com/package/rollup-plugin-syntax-highlight',
    website: 'https://github.com/valterkraemer/rollup-plugin-syntax-highlight#readme',
  },
  source: {
    github: 'valterkraemer/rollup-plugin-syntax-highlight',
    npm: 'rollup-plugin-syntax-highlight',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
