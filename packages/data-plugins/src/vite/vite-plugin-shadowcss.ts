import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shadowcss',
  description: 'Write CSS to the specified shadow dom',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'kinfuy/vite-plugin-shadowcss',
    npm: 'vite-plugin-shadowcss',
  },
  links: {
    github: 'https://github.com/kinfuy/vite-plugin-shadowcss',
    npm: 'https://www.npmjs.com/package/vite-plugin-shadowcss',
  },
  stats: {
    downloads: {
      monthly: 1580,
      weekly: 590,
    },
  },
})
