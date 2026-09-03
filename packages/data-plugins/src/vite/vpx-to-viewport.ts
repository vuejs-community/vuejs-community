import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vpx-to-viewport',
  description: 'Universal VPX to viewport units converter. Supports PostCSS plugin, Vite plugin, and Webpack loader. Converts vpx, maxvpx, minvpx, cvpx, and linear-vpx() for fluid responsive design across all build tools.',
  version: '1.9.0',
  category: 'plugin',
  tags: [
    'vpx',
    'viewport',
    'responsive',
    'mobile-first',
    'postcss',
    'postcss-plugin',
    'vite',
    'vite-plugin',
    'webpack',
    'webpack-loader',
    'css',
    'vw',
    'vh',
    'fluid-design',
    'vpx-to-viewport',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/EquinoxHZ/vpx-to-viewport',
    npm: 'https://www.npmjs.com/package/vpx-to-viewport',
  },
  stats: {
    downloads: {
      monthly: 83,
      weekly: 9,
    },
  },
})
