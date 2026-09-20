import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-css-generator',
  description: 'css file generator only write class name',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'css',
    'vue',
    'react',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/macheteHot/css-generator-plugin',
    npm: 'https://www.npmjs.com/package/vite-plugin-css-generator',
    website: 'https://github.com/macheteHot/css-generator-plugin#readme',
  },
  source: {
    github: 'macheteHot/css-generator-plugin',
    npm: 'vite-plugin-css-generator',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 23,
      weekly: 6,
    },
  },
})
