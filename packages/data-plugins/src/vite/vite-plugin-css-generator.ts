import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-css-generator',
  description: 'css file generator only write class name',
  icon: 'logos:vite-icon',
  version: '2.5.8',
  category: 'plugin',
  tags: [
    'css',
    'vue',
    'react',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'macheteHot/css-generator-plugin',
    npm: 'vite-plugin-css-generator',
  },
  links: {
    github: 'https://github.com/macheteHot/css-generator-plugin',
    npm: 'https://www.npmjs.com/package/vite-plugin-css-generator',
  },
  stats: {
    downloads: {
      monthly: 46,
      weekly: 5,
    },
  },
})
