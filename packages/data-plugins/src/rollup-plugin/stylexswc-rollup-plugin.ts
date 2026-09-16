import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@stylexswc/rollup-plugin',
  description: 'StyleX plugin for Rollup powered by a Rust NAPI-RS/SWC compiler. Fast StyleX transforms and CSS extraction without Babel.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'atomic-css',
    'css-extraction',
    'css-in-js',
    'lightningcss',
    'napi-rs',
    'rollup',
    'rollup-plugin',
    'rust',
    'stylex',
    'swc',
  ],
  source: {
    github: 'Dwlad90/stylex-swc-plugin',
    npm: '@stylexswc/rollup-plugin',
  },
  links: {
    github: 'https://github.com/Dwlad90/stylex-swc-plugin',
    npm: 'https://www.npmjs.com/package/@stylexswc/rollup-plugin',
    website: 'https://github.com/Dwlad90/stylex-swc-plugin/tree/develop/packages/rollup-plugin#readme',
  },
  stats: {
    stars: 110,
    downloads: {
      monthly: 1823,
      weekly: 197,
    },
  },
})
