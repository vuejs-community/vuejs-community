import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-minip',
  description: 'Develop Vite apps inside Minip with native APIs and hot updates, then package and install by QR code',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'minip',
  ],
  links: {
    github: 'https://github.com/Yosorable/minip',
    npm: 'https://www.npmjs.com/package/vite-plugin-minip',
    website: 'https://github.com/Yosorable/minip#readme',
  },
  source: {
    github: 'Yosorable/minip',
    npm: 'vite-plugin-minip',
  },
})
