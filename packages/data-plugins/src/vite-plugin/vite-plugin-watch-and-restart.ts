import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-watch-and-restart',
  description: 'Watch the file of folder change and force restart Vite server',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    github: 'cccnobody/vite-plugin-watch-and-restart',
    npm: 'vite-plugin-watch-and-restart',
  },
  links: {
    github: 'https://github.com/cccnobody/vite-plugin-watch-and-restart',
    npm: 'https://www.npmjs.com/package/vite-plugin-watch-and-restart',
    website: 'https://github.com/cccnobody/vite-plugin-watch-and-restart',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
