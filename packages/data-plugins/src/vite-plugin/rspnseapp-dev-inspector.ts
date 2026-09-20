import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rspnseapp/dev-inspector',
  description: 'Dev server plugins for Rspnse inspect functionality (Vite & Webpack)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'webpack-plugin',
    'rspnse',
    'responsive',
    'inspect',
    'css',
    'devtools',
  ],
  links: {
    github: 'https://github.com/AlexBoghh/Rspnse',
    npm: 'https://www.npmjs.com/package/@rspnseapp/dev-inspector',
    website: 'https://rspnse.net',
  },
  source: {
    github: 'AlexBoghh/Rspnse',
    npm: '@rspnseapp/dev-inspector',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 50,
      weekly: 2,
    },
  },
})
