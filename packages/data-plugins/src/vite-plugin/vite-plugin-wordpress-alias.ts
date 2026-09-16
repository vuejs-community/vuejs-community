import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-wordpress-alias',
  description: 'A Vite plugin that transforms asset URLs to use dev server URLs during WordPress theme development',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'wordpress',
    'wordpress-theme',
    'asset-management',
    'alias',
    'development',
    'dev-server',
    'hmr',
    'hot-reload',
    'css',
    'scss',
    'assets',
    'url-transform',
  ],
  source: {
    github: 'misits/vite-plugin-wordpress-alias',
    npm: 'vite-plugin-wordpress-alias',
  },
  links: {
    github: 'https://github.com/misits/vite-plugin-wordpress-alias',
    npm: 'https://www.npmjs.com/package/vite-plugin-wordpress-alias',
    website: 'https://github.com/misits/vite-plugin-wordpress-alias#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 2,
    },
  },
})
