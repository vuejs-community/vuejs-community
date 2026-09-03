import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-nudo',
  description: 'Vite plugin for build-time JavaScript type inference with Nudo',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'nudo',
    'type-inference',
    'javascript',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/nudojs/nudo',
    npm: 'https://www.npmjs.com/package/vite-plugin-nudo',
  },
  stats: {
    downloads: {
      monthly: 200,
      weekly: 18,
    },
  },
})
