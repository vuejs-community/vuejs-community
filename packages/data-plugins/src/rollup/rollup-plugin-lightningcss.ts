import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-lightningcss',
  description: 'Use Parcel\'s LightningCSS transformer and minifier with Rollup.',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'lightningcss',
    'css',
    'browserslist',
    'rollup',
    'plugin',
    'minify',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'thearchitector/rollup-plugin-lightningcss',
    npm: 'rollup-plugin-lightningcss',
  },
  links: {
    github: 'https://github.com/thearchitector/rollup-plugin-lightningcss',
    npm: 'https://www.npmjs.com/package/rollup-plugin-lightningcss',
  },
  stats: {
    downloads: {
      monthly: 130,
      weekly: 35,
    },
  },
})
