import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vpx-to-viewport',
  description: 'Universal VPX to viewport units converter. Supports PostCSS plugin, Vite plugin, and Webpack loader. Converts vpx, maxvpx, minvpx, cvpx, and linear-vpx() for fluid responsive design across all build tools.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/EquinoxHZ/vpx-to-viewport',
    npm: 'https://www.npmjs.com/package/vpx-to-viewport',
    website: 'https://github.com/EquinoxHZ/vpx-to-viewport#readme',
  },
  source: {
    github: 'EquinoxHZ/vpx-to-viewport',
    npm: 'vpx-to-viewport',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 240,
      weekly: 30,
    },
  },
})
