import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@holium/vite-plugin-urbit',
  description: 'A plugin to setup proxying from a vite devserver to an Urbit ship',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    github: 'holium/vite-plugin-urbit',
    npm: '@holium/vite-plugin-urbit',
  },
  links: {
    github: 'https://github.com/holium/vite-plugin-urbit',
    npm: 'https://www.npmjs.com/package/@holium/vite-plugin-urbit',
    website: 'https://github.com/liam-fitzgerald/vite-plugin-urbit#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 31,
      weekly: 8,
    },
  },
})
