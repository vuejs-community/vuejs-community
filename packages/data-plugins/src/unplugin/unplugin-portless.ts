import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-portless',
  description: 'Out of the box support for Vite + Portless',
  icon: 'icon:dark-unplugin',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'portless',
    'unplugin',
    'vite',
    'vite-plugin-portless',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'typed-sigterm/unplugin-portless',
    npm: 'unplugin-portless',
  },
  links: {
    github: 'https://github.com/typed-sigterm/unplugin-portless',
    npm: 'https://www.npmjs.com/package/unplugin-portless',
  },
  stats: {
    downloads: {
      monthly: 57,
      weekly: 14,
    },
  },
})
