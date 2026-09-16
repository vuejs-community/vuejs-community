import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-typescript-fix',
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
  source: {
    github: 'rollup/rollup-plugin-typescript',
    npm: 'rollup-plugin-typescript-fix',
  },
  links: {
    github: 'https://github.com/rollup/rollup-plugin-typescript',
    npm: 'https://www.npmjs.com/package/rollup-plugin-typescript-fix',
    website: 'https://github.com/rollup/rollup-plugin-typescript',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 5,
    },
  },
})
