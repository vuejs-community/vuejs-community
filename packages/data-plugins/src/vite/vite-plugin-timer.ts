import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-timer',
  description: 'vite打包过程的时间所消耗的时间显示出来。 (The time consumed by the vite packaging process is displayed.)',
  version: '1.3.4',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'timer',
    'vite',
    'vite-plugin-timer',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-timer',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 6,
    },
  },
})
