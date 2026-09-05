import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-remote-copy',
  description: 'A Vite plugin to download remote assets or copy local files into the dist directory during build.',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'remote',
    'copy',
    'download',
    'plugin',
    'build',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/qianyongdong/vite-plugin-remote-copy',
    npm: 'https://www.npmjs.com/package/vite-plugin-remote-copy',
  },
  stats: {
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
