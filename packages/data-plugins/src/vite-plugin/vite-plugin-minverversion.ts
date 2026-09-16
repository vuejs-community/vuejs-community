import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-minverversion',
  description: 'Automatically gets the `minver` version of the project and adds to Vite\'s define',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'minver',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'wetrustinprize/vite-plugin-minverversion',
    npm: 'vite-plugin-minverversion',
  },
  links: {
    github: 'https://github.com/wetrustinprize/vite-plugin-minverversion',
    npm: 'https://www.npmjs.com/package/vite-plugin-minverversion',
    website: 'https://github.com/wetrustinprize/vite-plugin-minverversion#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 880,
      weekly: 243,
    },
  },
})
