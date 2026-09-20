import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-webfonts',
  description: 'Generate @font-face declarations for your local font assets. 💁‍♀️',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'fonts',
    'webfonts',
    'typography',
    'woff',
    'woff2',
  ],
  links: {
    github: 'https://github.com/darkobits/vite-plugin-webfonts',
    npm: 'https://www.npmjs.com/package/vite-plugin-webfonts',
    website: 'https://github.com/darkobits/vite-plugin-webfonts#readme',
  },
  source: {
    github: 'darkobits/vite-plugin-webfonts',
    npm: 'vite-plugin-webfonts',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 34,
      weekly: 2,
    },
  },
})
