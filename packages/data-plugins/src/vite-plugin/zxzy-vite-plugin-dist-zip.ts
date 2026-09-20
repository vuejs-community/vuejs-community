import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zxzy/vite-plugin-dist-zip',
  description: 'A Vite plugin to zip the dist directory after building',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'zip',
    'archive',
    'dist',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@zxzy/vite-plugin-dist-zip',
    website: 'https://gitee.com/tonwe/vite-plugin-dist-zip#readme',
  },
  source: {
    npm: '@zxzy/vite-plugin-dist-zip',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19,
      weekly: 2,
    },
  },
})
