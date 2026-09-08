import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-file',
  description: 'A Vite plugin to download remote assets or copy local files into the dist directory during build.',
  icon: 'logos:vite-icon',
  version: '1.0.1',
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
    github: 'qianyongdong/vite-plugin-build-file',
    npm: 'vite-plugin-build-file',
  },
  links: {
    github: 'https://github.com/qianyongdong/vite-plugin-build-file',
    npm: 'https://www.npmjs.com/package/vite-plugin-build-file',
  },
  stats: {
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
