import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-open-ide',
  description: 'Jump to the local IDE source code while clicking the element of the browser automatically.',
  version: '0.0.10',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'jump-ide',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jump-ide/vite-plugin-open-ide',
    npm: 'https://www.npmjs.com/package/vite-plugin-open-ide',
  },
  stats: {
    downloads: {
      monthly: 53,
      weekly: 7,
    },
  },
})
