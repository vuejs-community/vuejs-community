import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-minverversion',
  description: 'Automatically gets the `minver` version of the project and adds to Vite\'s define',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'wetrustinprize/vite-plugin-minverversion',
    npm: 'vite-plugin-minverversion',
  },
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
