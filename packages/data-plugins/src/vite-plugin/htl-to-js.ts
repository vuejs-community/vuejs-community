import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'htl-to-js',
  description: 'Webpack loader, Vite plugin and CLI that transpiles AEM HTL (Sightly) templates into JavaScript template string functions.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'aem',
    'htl',
    'sightly',
    'webpack-loader',
    'vite-plugin',
    'storybook',
  ],
  links: {
    github: 'https://github.com/ramirezcgn/htl-to-js',
    npm: 'https://www.npmjs.com/package/htl-to-js',
    website: 'https://github.com/ramirezcgn/htl-to-js#readme',
  },
  source: {
    github: 'ramirezcgn/htl-to-js',
    npm: 'htl-to-js',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 338,
      weekly: 57,
    },
  },
})
