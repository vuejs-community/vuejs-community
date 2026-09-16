import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@urbit/vite-plugin-urbit',
  description: 'A plugin to setup proxying from a vite devserver to an Urbit ship',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'urbit',
    'vite-plugin',
  ],
  source: {
    github: 'urbit/vite-plugin-urbit',
    npm: '@urbit/vite-plugin-urbit',
  },
  links: {
    github: 'https://github.com/urbit/vite-plugin-urbit',
    npm: 'https://www.npmjs.com/package/@urbit/vite-plugin-urbit',
    website: 'https://github.com/urbit/vite-plugin-urbit#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 9917,
      weekly: 1732,
    },
  },
})
