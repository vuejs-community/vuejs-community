import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-md-icon',
  description: 'Minify md icons and font in your app.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'md-icon',
    'material-web',
    'mwc',
    'rollup-plugin',
    'minify',
  ],
  source: {
    github: 'vdegenne/rollup-plugin-md-icon',
    npm: 'rollup-plugin-md-icon',
  },
  links: {
    github: 'https://github.com/vdegenne/rollup-plugin-md-icon',
    npm: 'https://www.npmjs.com/package/rollup-plugin-md-icon',
    website: 'https://github.com/vdegenne/rollup-plugin-md-icon#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 18,
      weekly: 8,
    },
  },
})
