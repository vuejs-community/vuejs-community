import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-remote-copy',
  description: 'A Vite plugin to download remote assets or copy local files into the dist directory during build.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'remote',
    'copy',
    'download',
    'plugin',
    'build',
  ],
  source: {
    github: 'qianyongdong/vite-plugin-remote-copy',
    npm: 'vite-plugin-remote-copy',
  },
  links: {
    github: 'https://github.com/qianyongdong/vite-plugin-remote-copy',
    npm: 'https://www.npmjs.com/package/vite-plugin-remote-copy',
    website: 'https://github.com/qianyongdong/vite-plugin-remote-copy.git#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 20,
      weekly: 1,
    },
  },
})
