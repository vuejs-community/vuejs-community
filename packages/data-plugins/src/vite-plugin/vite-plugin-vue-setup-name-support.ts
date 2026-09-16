import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-vue-setup-name-support',
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
  source: {
    github: 'vbenjs/vite-plugin-html',
    npm: 'vite-plugin-vue-setup-name-support',
  },
  links: {
    github: 'https://github.com/vbenjs/vite-plugin-html',
    npm: 'https://www.npmjs.com/package/vite-plugin-vue-setup-name-support',
    website: 'https://github.com/vbenjs/vite-plugin-html/tree/master/#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
