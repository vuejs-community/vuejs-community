import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-virtual-dts',
  description: 'Generate declaration files for virtual module',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'virtual-module',
    'dts',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ryo-gk/vite-plugin-dts-generator',
    npm: 'https://www.npmjs.com/package/vite-plugin-virtual-dts',
  },
  stats: {
    downloads: {
      monthly: 30,
      weekly: 2,
    },
  },
})
