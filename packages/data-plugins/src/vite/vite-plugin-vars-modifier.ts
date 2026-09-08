import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vars-modifier',
  description: 'A vite plugin for transform variables to config',
  icon: 'logos:vite-icon',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'plugin',
    'less',
    'sass',
    'scss',
    'vars',
    'variables',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'fanhaoyuan/vite-plugin-vars-modifier',
    npm: 'vite-plugin-vars-modifier',
  },
  links: {
    github: 'https://github.com/fanhaoyuan/vite-plugin-vars-modifier',
    npm: 'https://www.npmjs.com/package/vite-plugin-vars-modifier',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 6,
    },
  },
})
