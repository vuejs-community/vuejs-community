import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-preload',
  description: 'Speed up your Vite application by preloading server rendered lazy modules and stylesheets as early as possible',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react',
    'css',
    'ssr',
    'esmodules',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'wille/vite-preload',
    npm: 'vite-preload',
  },
  links: {
    github: 'https://github.com/wille/vite-preload',
    npm: 'https://www.npmjs.com/package/vite-preload',
    website: 'https://github.com/wille/vite-preload#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2029,
      weekly: 421,
    },
  },
})
