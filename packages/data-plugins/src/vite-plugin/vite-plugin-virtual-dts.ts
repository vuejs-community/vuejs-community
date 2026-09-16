import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-virtual-dts',
  description: 'Generate declaration files for virtual module',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'virtual-module',
    'dts',
  ],
  source: {
    github: 'ryo-gk/vite-plugin-dts-generator',
    npm: 'vite-plugin-virtual-dts',
  },
  links: {
    github: 'https://github.com/ryo-gk/vite-plugin-dts-generator',
    npm: 'https://www.npmjs.com/package/vite-plugin-virtual-dts',
    website: 'https://github.com/ryo-gk/vite-plugin-dts-generator#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 37,
      weekly: 8,
    },
  },
})
