import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-upload',
  description: 'A Vite plugin for uploading build artifacts.',
  icon: 'logos:vite-icon',
  version: '0.4.3',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'yulin96/vite-plugin-upload',
    npm: 'vite-plugin-upload',
  },
  links: {
    github: 'https://github.com/yulin96/vite-plugin-upload',
    npm: 'https://www.npmjs.com/package/vite-plugin-upload',
  },
  stats: {
    downloads: {
      monthly: 707,
      weekly: 211,
    },
  },
})
