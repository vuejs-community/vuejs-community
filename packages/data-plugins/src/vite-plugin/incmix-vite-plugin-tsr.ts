import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@incmix/vite-plugin-tsr',
  description: 'This is a Vite plugin for generating ts runtime objects from `.tsr` files.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'rollup-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@incmix/vite-plugin-tsr',
  },
  source: {
    npm: '@incmix/vite-plugin-tsr',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 4,
    },
  },
})
