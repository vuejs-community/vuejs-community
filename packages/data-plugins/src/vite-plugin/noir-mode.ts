import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'noir-mode',
  description: 'Build-time dark mode CSS generation for Vite using DarkReader\'s color transformation algorithm',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'postcss',
    'postcss-plugin',
    'dark-mode',
    'darkmode',
    'dark-theme',
    'darkreader',
    'css',
    'color-transform',
  ],
  source: {
    github: 'nicemicro/vite-noir',
    npm: 'noir-mode',
  },
  links: {
    github: 'https://github.com/nicemicro/vite-noir',
    npm: 'https://www.npmjs.com/package/noir-mode',
    website: 'https://github.com/nicemicro/vite-noir#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 17,
      weekly: 4,
    },
  },
})
