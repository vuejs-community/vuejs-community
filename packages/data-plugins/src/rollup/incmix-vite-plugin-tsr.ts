import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@incmix/vite-plugin-tsr',
  description: 'This is a Vite plugin for generating ts runtime objects from `.tsr` files.',
  version: '9.0.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@incmix/vite-plugin-tsr',
  },
  stats: {
    downloads: {
      monthly: 69,
      weekly: 5,
    },
  },
})
