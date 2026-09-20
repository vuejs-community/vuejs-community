import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@eamonxg/luci-theme-devkit',
  description: 'Shared mechanism for eamonxg\'s LuCI themes: the theme-neutral same-document router, its page-scoped patch loader, and the Vite plugin that ships them as resources/router-<theme>.js.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'openwrt',
    'luci',
    'luci-theme',
    'vite-plugin',
    'navigation-api',
  ],
  links: {
    github: 'https://github.com/eamonxg/luci-theme-devkit',
    npm: 'https://www.npmjs.com/package/@eamonxg/luci-theme-devkit',
    website: 'https://github.com/eamonxg/luci-theme-devkit#readme',
  },
  source: {
    github: 'eamonxg/luci-theme-devkit',
    npm: '@eamonxg/luci-theme-devkit',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 630,
      weekly: 24,
    },
  },
})
