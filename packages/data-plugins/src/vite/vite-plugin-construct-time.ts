import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-construct-time',
  description: '记录本次构建的时间',
  icon: 'logos:vite-icon',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'construct',
    'time',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Webming19/vite-plugin-construct-time',
    npm: 'vite-plugin-construct-time',
  },
  links: {
    github: 'https://github.com/Webming19/vite-plugin-construct-time',
    npm: 'https://www.npmjs.com/package/vite-plugin-construct-time',
  },
  stats: {
    downloads: {
      monthly: 6,
      weekly: 1,
    },
  },
})
