import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-keep-css-imports',
  description: 'Rollup plugin that allows to maintain the original structure of style imports without altering them during the bundling process',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'css-modules',
    'sass',
    'scss',
    'keep',
    'preserve',
    'imports',
  ],
  links: {
    github: 'https://github.com/SLTKA/rollup-plugin-keep-css-imports',
    npm: 'https://www.npmjs.com/package/rollup-plugin-keep-css-imports',
    website: 'https://github.com/SLTKA/rollup-plugin-keep-css-imports',
  },
  source: {
    github: 'SLTKA/rollup-plugin-keep-css-imports',
    npm: 'rollup-plugin-keep-css-imports',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11638,
      weekly: 2800,
    },
  },
})
