import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@rspnseapp/dev-inspector',
  description: 'Dev server plugins for Rspnse inspect functionality (Vite & Webpack)',
  version: '0.5.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'webpack-plugin',
    'rspnse',
    'responsive',
    'inspect',
    'css',
    'devtools',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/AlexBoghh/Rspnse',
    npm: 'https://www.npmjs.com/package/@rspnseapp/dev-inspector',
  },
  stats: {
    downloads: {
      monthly: 40,
      weekly: 13,
    },
  },
})
