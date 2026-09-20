import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-html-inject-commands',
  description: 'Inject commands result into index.html meta tag.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'html',
    'inject',
    'command',
  ],
  links: {
    github: 'https://github.com/byronogis/vite-plugin-html-inject-commands',
    npm: 'https://www.npmjs.com/package/nuxt-html-inject-commands',
    website: 'https://github.com/byronogis/vite-plugin-html-inject-commands#readme',
  },
  source: {
    github: 'byronogis/vite-plugin-html-inject-commands',
    npm: 'nuxt-html-inject-commands',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
