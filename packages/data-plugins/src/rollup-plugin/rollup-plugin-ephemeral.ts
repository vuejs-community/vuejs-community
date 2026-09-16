import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-ephemeral',
  description: 'Like `@rollup/plugin-virtual` but sometimes you need virtual modules to behave like real files.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
  ],
  source: {
    npm: 'rollup-plugin-ephemeral',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-ephemeral',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 722,
      weekly: 163,
    },
  },
})
