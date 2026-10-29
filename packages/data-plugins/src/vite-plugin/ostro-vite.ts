import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ostro/vite',
  description: 'OstroJS plugin for Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ostro',
    'ostrojs',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ostrojs/ostro-vite',
    npm: 'https://www.npmjs.com/package/@ostro/vite',
    website: 'https://github.com/ostrojs/ostro-vite#readme',
  },
  source: {
    github: 'ostrojs/ostro-vite',
    npm: '@ostro/vite',
  },
})
