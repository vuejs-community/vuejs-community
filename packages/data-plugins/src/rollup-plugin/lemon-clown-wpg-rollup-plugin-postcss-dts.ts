import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lemon-clown-wpg/rollup-plugin-postcss-dts',
  description: 'generate *.d.ts for *.styl|*.scss|*.sass|*.css files',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'postcss',
    'css d.ts',
  ],
  source: {
    github: 'lemon-clown/web-play-ground',
    npm: '@lemon-clown-wpg/rollup-plugin-postcss-dts',
  },
  links: {
    github: 'https://github.com/lemon-clown/web-play-ground',
    npm: 'https://www.npmjs.com/package/@lemon-clown-wpg/rollup-plugin-postcss-dts',
    website: 'https://github.com/lemon-clown/web-play-ground/tree/master/scaffold/rollup-plugin-postcss-dts#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 21,
      weekly: 2,
    },
  },
})
