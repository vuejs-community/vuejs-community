import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-lwc',
  description: 'Vite plugin for Lightning Web Components (LWC)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'lwc',
    'lightning',
    'web',
    'components',
  ],
  links: {
    github: 'https://github.com/cardoso/vite-plugin-lwc',
    npm: 'https://www.npmjs.com/package/vite-plugin-lwc',
    website: 'https://github.com/cardoso/vite-plugin-lwc/tree/main/packages/vite-plugin-lwc#readme',
  },
  source: {
    github: 'cardoso/vite-plugin-lwc',
    npm: 'vite-plugin-lwc',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 821,
      weekly: 116,
    },
  },
})
