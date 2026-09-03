import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-spine-dynamic-url',
  description: 'Automatically corrects the image path in specified spine atlas files',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'minver',
    'vite',
    'vite-plugin',
    'atlas',
    'spine',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/wetrustinprize/vite-plugin-minverversion',
    npm: 'https://www.npmjs.com/package/vite-plugin-spine-dynamic-url',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 8,
    },
  },
})
