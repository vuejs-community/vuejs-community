import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@multiplatform.one/vite-plugin-gnome',
  description: 'Vite plugin that makes Tamagui render under react-gnome (GTK4/GJS) — bundle patches for @tamagui/core\'s native lazy-init chains, the sheet/portal native builds, the hover/animation gates, plus the Tamagui-specific resolver aliases. Pairs with @react-gnome',
  version: '7.6.0',
  category: 'plugin',
  tags: [
    'gjs',
    'gnome',
    'gtk4',
    'multiplatform.one',
    'react-gnome',
    'tamagui',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@multiplatform.one/vite-plugin-gnome',
  },
  stats: {
    downloads: {
      monthly: 2269,
      weekly: 833,
    },
  },
})
