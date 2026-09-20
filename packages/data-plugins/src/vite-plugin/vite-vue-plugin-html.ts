import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-vue-plugin-html',
  description: 'A plugin for vite to Minimize index.html and use lodash.template template syntax in index.html',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'html',
    'minify',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/xingyuv/vite-vue-plugin-html',
    npm: 'https://www.npmjs.com/package/vite-vue-plugin-html',
    website: 'https://github.com/xingyuv/vite-vue-plugin-html/tree/master/#readme',
  },
  source: {
    github: 'xingyuv/vite-vue-plugin-html',
    npm: 'vite-vue-plugin-html',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 602,
      weekly: 156,
    },
  },
})
