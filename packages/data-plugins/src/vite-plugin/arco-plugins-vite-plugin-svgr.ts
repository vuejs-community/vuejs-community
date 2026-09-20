import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@arco-plugins/vite-plugin-svgr',
  description: 'Vite plugin to transform SVGs into React components',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/PengJiyuan/vite-plugin-svgr',
    npm: 'https://www.npmjs.com/package/@arco-plugins/vite-plugin-svgr',
    website: 'https://github.com/PengJiyuan/vite-plugin-svgr#readme',
  },
  source: {
    github: 'PengJiyuan/vite-plugin-svgr',
    npm: '@arco-plugins/vite-plugin-svgr',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 1327,
      weekly: 130,
    },
  },
})
