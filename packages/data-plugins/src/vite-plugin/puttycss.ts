import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'puttycss',
  description: 'Zero-runtime, zero-config CSS-in-JS. Write typed style objects, ship atomic CSS and no JavaScript.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'css-in-js',
    'zero-runtime',
    'atomic-css',
    'vite-plugin',
    'postcss-plugin',
    'nextjs',
    'webpack-loader',
    'typescript',
  ],
  source: {
    npm: 'puttycss',
  },
  links: {
    npm: 'https://www.npmjs.com/package/puttycss',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 182,
      weekly: 182,
    },
  },
})
