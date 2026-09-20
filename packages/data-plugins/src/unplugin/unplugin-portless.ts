import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-portless',
  description: 'Out of the box support for Vite + Portless',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'portless',
    'unplugin',
    'vite',
    'vite-plugin-portless',
  ],
  links: {
    github: 'https://github.com/typed-sigterm/unplugin-portless',
    npm: 'https://www.npmjs.com/package/unplugin-portless',
    website: 'https://github.com/typed-sigterm/unplugin-portless#readme',
  },
  source: {
    github: 'typed-sigterm/unplugin-portless',
    npm: 'unplugin-portless',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 49,
      weekly: 2,
    },
  },
})
