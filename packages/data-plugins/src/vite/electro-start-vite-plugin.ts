import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@electro-start/vite-plugin',
  description: 'Vite plugin that compiles electro-start createMainFn modules to client stubs',
  version: '0.0.1-alpha.0',
  category: 'plugin',
  tags: [
    'electro-start',
    'vite-plugin',
    'electrobun',
    'rpc',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mellofordev/electro-start',
    npm: 'https://www.npmjs.com/package/@electro-start/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 157,
      weekly: 5,
    },
  },
})
