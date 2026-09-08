import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-webfonts',
  description: 'Generate @font-face declarations for your local font assets. 💁‍♀️',
  icon: 'logos:vite-icon',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'fonts',
    'webfonts',
    'typography',
    'woff',
    'woff2',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'darkobits/vite-plugin-webfonts',
    npm: 'vite-plugin-webfonts',
  },
  links: {
    github: 'https://github.com/darkobits/vite-plugin-webfonts',
    npm: 'https://www.npmjs.com/package/vite-plugin-webfonts',
  },
  stats: {
    downloads: {
      monthly: 32,
      weekly: 1,
    },
  },
})
