import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-relay-custom',
  description: 'A vite plugin for relay',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'graphql',
    'relay',
    'typescript',
    'graphql-relay',
    'vite',
    'vite-plugin',
    'vite-plugin-relay',
  ],
  links: {
    github: 'https://github.com/oscartbeaumont/vite-plugin-relay',
    npm: 'https://www.npmjs.com/package/vite-plugin-relay-custom',
    website: 'https://github.com/oscartbeaumont/vite-plugin-relay#readme',
  },
  source: {
    github: 'oscartbeaumont/vite-plugin-relay',
    npm: 'vite-plugin-relay-custom',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
