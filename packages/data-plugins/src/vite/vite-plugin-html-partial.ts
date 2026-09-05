import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-partial',
  description: 'Simple plugin to include text files into index.html for vite dev',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/j-boettcher/vite-plugin-html-partial',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-partial',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 2,
    },
  },
})
