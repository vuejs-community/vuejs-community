import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-resolve-shebang',
  description: 'Rollup plugin with recognize shebang and preserve it',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'shebang',
  ],
  source: {
    npm: 'rollup-plugin-resolve-shebang',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-resolve-shebang',
    website: 'https://github.com/mister-hope/rollup-plugin-resolve-shebang#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 126,
      weekly: 10,
    },
  },
})
