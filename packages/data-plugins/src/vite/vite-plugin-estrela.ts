import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-estrela',
  description: 'A vite plugin to pre-process estrela jsx/tsx files',
  icon: 'logos:vite-icon',
  version: '0.12.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'estrela',
    'jsx',
    'tsx',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-estrela',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-estrela',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 1,
    },
  },
})
