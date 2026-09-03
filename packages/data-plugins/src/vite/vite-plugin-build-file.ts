import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-file',
  description: 'A Vite plugin to download remote assets or copy local files into the dist directory during build.',
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
  links: {
    github: 'https://github.com/qianyongdong/vite-plugin-build-file',
    npm: 'https://www.npmjs.com/package/vite-plugin-build-file',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 3,
    },
  },
})
