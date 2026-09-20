import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@bytehide/rollup-shield',
  description: 'ByteHide Shield plugin for Rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'bytehide',
    'obfuscation',
    'security',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@bytehide/rollup-shield',
  },
  source: {
    npm: '@bytehide/rollup-shield',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 1,
    },
  },
})
