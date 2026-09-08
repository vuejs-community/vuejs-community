import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-remote-copy',
  description: 'A Vite plugin to download remote assets or copy local files into the dist directory during build.',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'qianyongdong/vite-plugin-remote-copy',
    npm: 'vite-plugin-remote-copy',
  },
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
