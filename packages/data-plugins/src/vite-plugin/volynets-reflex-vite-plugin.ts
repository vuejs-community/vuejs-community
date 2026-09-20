import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@volynets/reflex-vite-plugin',
  description: 'The default Vite plugin for Reflex projects',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'reflex',
    'vite',
    'vite-plugin',
    'jsx',
  ],
  links: {
    github: 'https://github.com/volynetstyle/Reflex',
    npm: 'https://www.npmjs.com/package/@volynets/reflex-vite-plugin',
    website: 'https://github.com/volynetstyle/Reflex/tree/main/plugins/@vite/reflex-vite-plugin#readme',
  },
  source: {
    github: 'volynetstyle/Reflex',
    npm: '@volynets/reflex-vite-plugin',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 15,
      weekly: 6,
    },
  },
})
