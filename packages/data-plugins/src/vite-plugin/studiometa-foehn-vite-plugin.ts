import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@studiometa/foehn-vite-plugin',
  description: 'Vite plugin for Føhn WordPress framework',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'wordpress',
    'foehn',
  ],
  links: {
    github: 'https://github.com/studiometa/foehn-framework',
    npm: 'https://www.npmjs.com/package/@studiometa/foehn-vite-plugin',
    website: 'https://github.com/studiometa/foehn-framework/tree/main/packages/vite-plugin#readme',
  },
  source: {
    github: 'studiometa/foehn-framework',
    npm: '@studiometa/foehn-vite-plugin',
  },
  stats: {
    stars: 7,
    downloads: {
      monthly: 1723,
      weekly: 86,
    },
  },
})
