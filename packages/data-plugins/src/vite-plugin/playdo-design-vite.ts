import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@playdo-design/vite',
  description: 'Playdo\'s Vite plugin: lets Playdo edit the source of what you point at in your running React app.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'visual editing',
    'playdo',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@playdo-design/vite',
    website: 'https://playdo.design',
  },
  source: {
    npm: '@playdo-design/vite',
  },
})
