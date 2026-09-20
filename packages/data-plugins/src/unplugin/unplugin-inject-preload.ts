import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-inject-preload',
  description: 'Inject <link rel=\'preload\'> for Webpack/ViteJS',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rspack',
    'html-webpack-plugin',
    'html',
    'link',
    'preload',
    'inject',
  ],
  links: {
    github: 'https://github.com/applelo/unplugin-inject-preload',
    npm: 'https://www.npmjs.com/package/unplugin-inject-preload',
    website: 'https://github.com/applelo/unplugin-inject-preload#readme',
  },
  source: {
    github: 'applelo/unplugin-inject-preload',
    npm: 'unplugin-inject-preload',
  },
  stats: {
    stars: 39,
    downloads: {
      monthly: 80044,
      weekly: 16132,
    },
  },
})
