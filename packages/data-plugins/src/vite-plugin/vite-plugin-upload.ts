import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-upload',
  description: 'A Vite plugin for uploading build artifacts.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'plugin',
    'deploy',
    'upload',
    'ftp',
    'oss',
    'alioss',
  ],
  links: {
    github: 'https://github.com/yulin96/vite-plugin-upload',
    npm: 'https://www.npmjs.com/package/vite-plugin-upload',
    website: 'https://github.com/yulin96/vite-plugin-upload#readme',
  },
  source: {
    github: 'yulin96/vite-plugin-upload',
    npm: 'vite-plugin-upload',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 484,
      weekly: 20,
    },
  },
})
