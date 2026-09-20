import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@multiplatform.one/vite-plugin-gnome',
  description: 'Vite plugin that makes Tamagui render under react-gnome (GTK4/GJS) — bundle patches for @tamagui/core\'s native lazy-init chains, the sheet/portal native builds, the hover/animation gates, plus the Tamagui-specific resolver aliases. Pairs with @react-gnome',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'gjs',
    'gnome',
    'gtk4',
    'multiplatform.one',
    'react-gnome',
    'tamagui',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@multiplatform.one/vite-plugin-gnome',
    website: 'https://multiplatform.one',
  },
  source: {
    npm: '@multiplatform.one/vite-plugin-gnome',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 3262,
      weekly: 854,
    },
  },
})
