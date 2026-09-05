import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-watch-and-restart',
  description: 'Watch the file of folder change and force restart Vite server',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cccnobody/vite-plugin-watch-and-restart',
    npm: 'https://www.npmjs.com/package/vite-plugin-watch-and-restart',
  },
  stats: {
    downloads: {
      monthly: 3,
      weekly: 1,
    },
  },
})
