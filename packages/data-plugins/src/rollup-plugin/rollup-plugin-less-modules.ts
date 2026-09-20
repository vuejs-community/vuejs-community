import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-less-modules',
  description: 'The rollup plugin that compiles imported LESS files into CSS',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'less',
    'css',
  ],
  links: {
    github: 'https://github.com/katrotz/rollup-plugin-less-modules',
    npm: 'https://www.npmjs.com/package/rollup-plugin-less-modules',
    website: 'https://github.com/katrotz/rollup-plugin-less-modules#readme',
  },
  source: {
    github: 'katrotz/rollup-plugin-less-modules',
    npm: 'rollup-plugin-less-modules',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 206,
      weekly: 37,
    },
  },
})
