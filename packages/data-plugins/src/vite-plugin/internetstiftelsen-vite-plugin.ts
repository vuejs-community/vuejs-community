import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@internetstiftelsen/vite-plugin',
  description: 'Internetstiftelsen\'s Vite plugin for wordpress',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'wordpress',
    'config',
    'internetstiftelsen',
  ],
  source: {
    github: 'sewebb/standards-and-conventions',
    npm: '@internetstiftelsen/vite-plugin',
  },
  links: {
    github: 'https://github.com/sewebb/standards-and-conventions',
    npm: 'https://www.npmjs.com/package/@internetstiftelsen/vite-plugin',
    website: 'https://github.com/sewebb/standards-and-conventions#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 48,
      weekly: 7,
    },
  },
})
