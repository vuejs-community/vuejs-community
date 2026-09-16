import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'domagic-vite-plugin',
  description: 'A development-only Vite plugin for DOM source mapping and AI-assisted style edits.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'dom',
    'react',
    'vue',
    'ai',
  ],
  source: {
    npm: 'domagic-vite-plugin',
  },
  links: {
    npm: 'https://www.npmjs.com/package/domagic-vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 266,
      weekly: 65,
    },
  },
})
