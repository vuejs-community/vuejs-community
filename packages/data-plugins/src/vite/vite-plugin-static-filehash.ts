import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-static-filehash',
  description: 'A Vite plugin that tries to keep the hash of a single file unchanged',
  icon: 'logos:vite-icon',
  version: '0.0.8-alpha.2',
  category: 'plugin',
  tags: [
    'vite',
    'hash',
    'file',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'MrQinYQ/vite-plugin-static-filehash',
    npm: 'vite-plugin-static-filehash',
  },
  links: {
    github: 'https://github.com/MrQinYQ/vite-plugin-static-filehash',
    npm: 'https://www.npmjs.com/package/vite-plugin-static-filehash',
  },
  stats: {
    downloads: {
      monthly: 46,
      weekly: 1,
    },
  },
})
