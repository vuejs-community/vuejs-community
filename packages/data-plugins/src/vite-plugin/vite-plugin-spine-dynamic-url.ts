import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-spine-dynamic-url',
  description: 'Automatically corrects the image path in specified spine atlas files',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'minver',
    'vite',
    'vite-plugin',
    'atlas',
    'spine',
  ],
  source: {
    github: 'wetrustinprize/vite-plugin-minverversion',
    npm: 'vite-plugin-spine-dynamic-url',
  },
  links: {
    github: 'https://github.com/wetrustinprize/vite-plugin-minverversion',
    npm: 'https://www.npmjs.com/package/vite-plugin-spine-dynamic-url',
    website: 'https://github.com/wetrustinprize/vite-plugin-minverversion#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 18,
      weekly: 2,
    },
  },
})
