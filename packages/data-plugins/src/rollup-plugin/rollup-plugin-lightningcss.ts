import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-lightningcss',
  description: 'Use Parcel\'s LightningCSS transformer and minifier with Rollup.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'lightningcss',
    'css',
    'browserslist',
    'rollup',
    'plugin',
    'minify',
  ],
  source: {
    github: 'thearchitector/rollup-plugin-lightningcss',
    npm: 'rollup-plugin-lightningcss',
  },
  links: {
    github: 'https://github.com/thearchitector/rollup-plugin-lightningcss',
    npm: 'https://www.npmjs.com/package/rollup-plugin-lightningcss',
    website: 'https://github.com/thearchitector/rollup-plugin-lightningcss',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 109,
      weekly: 11,
    },
  },
})
