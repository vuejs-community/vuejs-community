import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-eslint',
  description: 'Verify entry point and all imported files with ESLint',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'es2015',
    'eslint',
    'lint',
  ],
  source: {
    github: 'TrySound/rollup-plugin-eslint',
    npm: 'rollup-plugin-eslint',
  },
  links: {
    github: 'https://github.com/TrySound/rollup-plugin-eslint',
    npm: 'https://www.npmjs.com/package/rollup-plugin-eslint',
  },
  stats: {
    stars: 60,
    downloads: {
      monthly: 36904,
      weekly: 7472,
    },
  },
})
