import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-shadowcss',
  description: 'Write CSS to the specified shadow dom',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'shadow',
    'chrome',
    'content-script',
  ],
  source: {
    github: 'kinfuy/vite-plugin-shadowcss',
    npm: 'vite-plugin-shadowcss',
  },
  links: {
    github: 'https://github.com/kinfuy/vite-plugin-shadowcss',
    npm: 'https://www.npmjs.com/package/vite-plugin-shadowcss',
    website: 'https://github.com/kinfuy/vite-plugin-shadowcss#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2008,
      weekly: 683,
    },
  },
})
