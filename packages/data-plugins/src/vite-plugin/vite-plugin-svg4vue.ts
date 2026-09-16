import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svg4vue',
  description: 'A vite plugin which can transform svg icon to vue component, support optimization via SVGO, easy to customize svg color and size.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'yisibell/vite-plugin-svg4vue',
    npm: 'vite-plugin-svg4vue',
  },
  links: {
    github: 'https://github.com/yisibell/vite-plugin-svg4vue',
    npm: 'https://www.npmjs.com/package/vite-plugin-svg4vue',
    website: 'https://github.com/yisibell/vite-plugin-svg4vue#readme',
  },
  stats: {
    stars: 24,
    downloads: {
      monthly: 6821,
      weekly: 4261,
    },
  },
})
