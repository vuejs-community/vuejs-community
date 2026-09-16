import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-prettier',
  description: 'Run prettier formatter with rollup',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'prettier',
  ],
  source: {
    github: 'mjeanroy/rollup-plugin-prettier',
    npm: 'rollup-plugin-prettier',
  },
  links: {
    github: 'https://github.com/mjeanroy/rollup-plugin-prettier',
    npm: 'https://www.npmjs.com/package/rollup-plugin-prettier',
    website: 'https://github.com/mjeanroy/rollup-plugin-prettier#readme',
  },
  stats: {
    stars: 64,
    downloads: {
      monthly: 84950,
      weekly: 15156,
    },
  },
})
