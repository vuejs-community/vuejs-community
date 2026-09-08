import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svg4vue',
  description: 'A vite plugin which can transform svg icon to vue component, support optimization via SVGO, easy to customize svg color and size.',
  icon: 'logos:vite-icon',
  version: '4.5.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'svg',
    'svgo',
    'svg-component',
    'svg-icon',
    'icon',
    'vite-svg-loader',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'yisibell/vite-plugin-svg4vue',
    npm: 'vite-plugin-svg4vue',
  },
  links: {
    github: 'https://github.com/yisibell/vite-plugin-svg4vue',
    npm: 'https://www.npmjs.com/package/vite-plugin-svg4vue',
  },
  stats: {
    downloads: {
      monthly: 2290,
      weekly: 1045,
    },
  },
})
