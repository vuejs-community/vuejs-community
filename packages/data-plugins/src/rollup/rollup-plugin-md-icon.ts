import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-md-icon',
  description: 'Minify md icons and font in your app.',
  icon: 'logos:rollupjs',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'rollup',
    'md-icon',
    'material-web',
    'mwc',
    'rollup-plugin',
    'minify',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'vdegenne/rollup-plugin-md-icon',
    npm: 'rollup-plugin-md-icon',
  },
  links: {
    github: 'https://github.com/vdegenne/rollup-plugin-md-icon',
    npm: 'https://www.npmjs.com/package/rollup-plugin-md-icon',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 1,
    },
  },
})
