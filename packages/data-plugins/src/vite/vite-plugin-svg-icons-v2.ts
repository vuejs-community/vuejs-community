import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-svg-icons-v2',
  description: '修改svg-baker为svg-baker-v2, svgo升级到3.0.0',
  icon: 'logos:vite-icon',
  version: '2.0.1-beta01',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'svg',
    'sprite',
    'svgo',
    'vben',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'anncwb/vite-plugin-svg-icons',
    npm: 'vite-plugin-svg-icons-v2',
  },
  links: {
    github: 'https://github.com/anncwb/vite-plugin-svg-icons',
    npm: 'https://www.npmjs.com/package/vite-plugin-svg-icons-v2',
  },
  stats: {
    downloads: {
      monthly: 78,
      weekly: 26,
    },
  },
})
