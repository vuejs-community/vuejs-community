import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-nudo',
  description: 'Vite plugin for build-time JavaScript type inference with Nudo',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'nudo',
    'type-inference',
    'javascript',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/nudojs/nudo',
    npm: 'https://www.npmjs.com/package/vite-plugin-nudo',
    website: 'https://github.com/nudojs/nudo/tree/main/packages/vite-plugin',
  },
  source: {
    github: 'nudojs/nudo',
    npm: 'vite-plugin-nudo',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 207,
      weekly: 3,
    },
  },
})
