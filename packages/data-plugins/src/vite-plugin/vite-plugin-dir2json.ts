import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dir2json',
  description: 'Convert the directory structure into json data containing specific file paths',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'dir2json',
    'simple',
    'json',
  ],
  source: {
    github: 'buddywang/vite-plugin-dir2json',
    npm: 'vite-plugin-dir2json',
  },
  links: {
    github: 'https://github.com/buddywang/vite-plugin-dir2json',
    npm: 'https://www.npmjs.com/package/vite-plugin-dir2json',
    website: 'https://github.com/buddywang/vite-plugin-dir2json#readme',
  },
  stats: {
    stars: 18,
    downloads: {
      monthly: 769,
      weekly: 138,
    },
  },
})
