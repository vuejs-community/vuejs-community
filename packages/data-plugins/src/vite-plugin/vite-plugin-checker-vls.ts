import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-checker-vls',
  description: 'VLS preset for vite-plugin-ts',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'typescript',
  ],
  source: {
    github: 'fi3ework/vite-plugin-checker',
    npm: 'vite-plugin-checker-vls',
  },
  links: {
    github: 'https://github.com/fi3ework/vite-plugin-checker',
    npm: 'https://www.npmjs.com/package/vite-plugin-checker-vls',
    website: 'https://github.com/fi3ework/vite-plugin-checker',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 65,
      weekly: 17,
    },
  },
})
