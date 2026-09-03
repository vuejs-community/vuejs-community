import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@urbit/vite-plugin-urbit',
  description: 'A plugin to setup proxying from a vite devserver to an Urbit ship',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'urbit',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/urbit/vite-plugin-urbit',
    npm: 'https://www.npmjs.com/package/@urbit/vite-plugin-urbit',
  },
  stats: {
    downloads: {
      monthly: 10730,
      weekly: 4556,
    },
  },
})
