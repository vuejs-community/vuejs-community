import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-fse-copy',
  description: 'Simple rollup plugin to copy static assets over to you public directory. Forker from https://github.com/meuter/rollup-plugin-copy',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'copy',
    'plugin',
    'rollup-plugin',
  ],
  source: {
    github: 'toxic-johann/rollup-plugin-fse-copy',
    npm: 'rollup-plugin-fse-copy',
  },
  links: {
    github: 'https://github.com/toxic-johann/rollup-plugin-fse-copy',
    npm: 'https://www.npmjs.com/package/rollup-plugin-fse-copy',
    website: 'https://github.com/toxic-johann/rollup-plugin-fse-copy#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
