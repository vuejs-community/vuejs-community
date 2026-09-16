import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'skynet-vite-plugin-svg-icons',
  description: '修改svg-baker为skynet-svg-baker',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'svg',
    'sprite',
    'svgo',
    'vben',
  ],
  source: {
    github: 'anncwb/vite-plugin-svg-icons',
    npm: 'skynet-vite-plugin-svg-icons',
  },
  links: {
    github: 'https://github.com/anncwb/vite-plugin-svg-icons',
    npm: 'https://www.npmjs.com/package/skynet-vite-plugin-svg-icons',
    website: 'https://github.com/anncwb/vite-plugin-svg-icons/tree/master/#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 2,
    },
  },
})
