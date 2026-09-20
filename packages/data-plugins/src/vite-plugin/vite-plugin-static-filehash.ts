import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-static-filehash',
  description: 'A Vite plugin that tries to keep the hash of a single file unchanged',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'hash',
    'file',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/MrQinYQ/vite-plugin-static-filehash',
    npm: 'https://www.npmjs.com/package/vite-plugin-static-filehash',
    website: 'https://github.com/MrQinYQ/vite-plugin-static-filehash#readme',
  },
  source: {
    github: 'MrQinYQ/vite-plugin-static-filehash',
    npm: 'vite-plugin-static-filehash',
  },
  stats: {
    stars: 9,
    downloads: {
      monthly: 9,
      weekly: 3,
    },
  },
})
