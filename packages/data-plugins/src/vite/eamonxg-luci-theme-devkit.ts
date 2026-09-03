import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@eamonxg/luci-theme-devkit',
  description: 'Shared mechanism for eamonxg\'s LuCI themes: the theme-neutral same-document router, its page-scoped patch loader, and the Vite plugin that ships them as resources/router-<theme>.js.',
  version: '0.3.1',
  category: 'plugin',
  tags: [
    'openwrt',
    'luci',
    'luci-theme',
    'vite-plugin',
    'navigation-api',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/eamonxg/luci-theme-devkit',
    npm: 'https://www.npmjs.com/package/@eamonxg/luci-theme-devkit',
  },
  stats: {
    downloads: {
      monthly: 387,
      weekly: 387,
    },
  },
})
