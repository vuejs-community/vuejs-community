import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'noir-mode',
  description: 'Build-time dark mode CSS generation for Vite using DarkReader\'s color transformation algorithm',
  version: '0.1.2',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/nicemicro/vite-noir',
    npm: 'https://www.npmjs.com/package/noir-mode',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
