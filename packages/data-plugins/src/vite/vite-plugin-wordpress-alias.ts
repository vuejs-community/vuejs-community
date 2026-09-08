import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-wordpress-alias',
  description: 'A Vite plugin that transforms asset URLs to use dev server URLs during WordPress theme development',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'misits/vite-plugin-wordpress-alias',
    npm: 'vite-plugin-wordpress-alias',
  },
  links: {
    github: 'https://github.com/misits/vite-plugin-wordpress-alias',
    npm: 'https://www.npmjs.com/package/vite-plugin-wordpress-alias',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 13,
    },
  },
})
