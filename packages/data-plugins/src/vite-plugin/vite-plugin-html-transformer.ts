import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-transformer',
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
    github: 'https://github.com/bennyxguo/vite-plugin-html-transformer',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-transformer',
    website: 'https://github.com/bennyxguo/vite-plugin-html-transformer/tree/master/#readme',
  },
  source: {
    github: 'bennyxguo/vite-plugin-html-transformer',
    npm: 'vite-plugin-html-transformer',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 70,
      weekly: 8,
    },
  },
})
