import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shadowcss',
  description: 'Write CSS to the specified shadow dom',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'shadow',
    'chrome',
    'content-script',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/kinfuy/vite-plugin-shadowcss',
    npm: 'https://www.npmjs.com/package/vite-plugin-shadowcss',
  },
  stats: {
    downloads: {
      monthly: 1303,
      weekly: 383,
    },
  },
})
