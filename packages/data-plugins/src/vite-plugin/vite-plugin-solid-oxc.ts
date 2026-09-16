import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-solid-oxc',
  description: 'Vite plugin for SolidJS using OXC-based compiler',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'solid',
    'solidjs',
    'jsx',
    'oxc',
    'rolldown',
  ],
  source: {
    npm: 'vite-plugin-solid-oxc',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-solid-oxc',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 45,
      weekly: 6,
    },
  },
})
