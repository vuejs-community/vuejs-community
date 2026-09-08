import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dir2json',
  description: 'Convert the directory structure into json data containing specific file paths',
  icon: 'logos:vite-icon',
  version: '1.3.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'dir2json',
    'simple',
    'json',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'buddywang/vite-plugin-dir2json',
    npm: 'vite-plugin-dir2json',
  },
  links: {
    github: 'https://github.com/buddywang/vite-plugin-dir2json',
    npm: 'https://www.npmjs.com/package/vite-plugin-dir2json',
  },
  stats: {
    downloads: {
      monthly: 534,
      weekly: 350,
    },
  },
})
