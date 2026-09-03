import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-minverversion',
  description: 'Automatically gets the `minver` version of the project and adds to Vite\'s define',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'minver',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/wetrustinprize/vite-plugin-minverversion',
    npm: 'https://www.npmjs.com/package/vite-plugin-minverversion',
  },
  stats: {
    downloads: {
      monthly: 971,
      weekly: 215,
    },
  },
})
