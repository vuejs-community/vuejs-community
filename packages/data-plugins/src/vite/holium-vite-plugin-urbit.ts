import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@holium/vite-plugin-urbit',
  description: 'A plugin to setup proxying from a vite devserver to an Urbit ship',
  version: '0.8.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/holium/vite-plugin-urbit',
    npm: 'https://www.npmjs.com/package/@holium/vite-plugin-urbit',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 10,
    },
  },
})
