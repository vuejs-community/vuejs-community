import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-prettier',
  description: 'Run prettier formatter with rollup',
  icon: 'logos:rollupjs',
  version: '4.2.0',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'prettier',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'mjeanroy/rollup-plugin-prettier',
    npm: 'rollup-plugin-prettier',
  },
  links: {
    github: 'https://github.com/mjeanroy/rollup-plugin-prettier',
    npm: 'https://www.npmjs.com/package/rollup-plugin-prettier',
  },
  stats: {
    downloads: {
      monthly: 98117,
      weekly: 17855,
    },
  },
})
