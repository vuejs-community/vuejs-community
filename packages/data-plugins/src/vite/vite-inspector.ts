import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-inspector',
  description: 'Jump to the local IDE source code while clicking the element of the browser automatically.',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite-inspector',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vite-inspector/vite-inspector',
    npm: 'https://www.npmjs.com/package/vite-inspector',
  },
  stats: {
    downloads: {
      monthly: 33,
      weekly: 3,
    },
  },
})
