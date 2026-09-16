import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@electro-start/vite-plugin',
  description: 'Vite plugin that compiles electro-start createMainFn modules to client stubs',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'electro-start',
    'vite-plugin',
    'electrobun',
    'rpc',
  ],
  source: {
    github: 'mellofordev/electro-start',
    npm: '@electro-start/vite-plugin',
  },
  links: {
    github: 'https://github.com/mellofordev/electro-start',
    npm: 'https://www.npmjs.com/package/@electro-start/vite-plugin',
    website: 'https://github.com/mellofordev/electro-start#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
