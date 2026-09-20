import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-new-ts',
  description: 'Seamless integration between Rollup and TypeScript.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'typescript',
    'es2015',
  ],
  links: {
    github: 'https://github.com/rollup/rollup-plugin-typescript',
    npm: 'https://www.npmjs.com/package/rollup-plugin-new-ts',
    website: 'https://github.com/rollup/rollup-plugin-typescript',
  },
  source: {
    github: 'rollup/rollup-plugin-typescript',
    npm: 'rollup-plugin-new-ts',
  },
  stats: {
    stars: 322,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
