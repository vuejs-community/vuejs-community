import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-install',
  description: 'auto install dependencies when you exec `npm run dev`',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'auto install',
    'plugin',
    'vite-plugin',
  ],
  source: {
    github: 'Simon-Bin/vite-plugin-auto-install',
    npm: 'vite-plugin-auto-install',
  },
  links: {
    github: 'https://github.com/Simon-Bin/vite-plugin-auto-install',
    npm: 'https://www.npmjs.com/package/vite-plugin-auto-install',
    website: 'https://github.com/Simon-Bin/vite-plugin-auto-install#readme',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
