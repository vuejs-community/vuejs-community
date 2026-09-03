import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-auto-install',
  description: 'auto install dependencies when you exec `npm run dev`',
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
