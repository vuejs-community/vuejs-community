import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-install',
  description: 'auto install dependencies when you exec `npm run dev`',
  icon: 'logos:vite-icon',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'vite',
    'auto install',
    'plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Simon-Bin/vite-plugin-auto-install',
    npm: 'vite-plugin-auto-install',
  },
  links: {
    github: 'https://github.com/Simon-Bin/vite-plugin-auto-install',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-install',
  },
  stats: {
    downloads: {
      monthly: 21,
      weekly: 4,
    },
  },
})
