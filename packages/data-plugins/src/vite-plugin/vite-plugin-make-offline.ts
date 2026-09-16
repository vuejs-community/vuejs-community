import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-make-offline',
  description: 'Make your built index.html offline.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'offline',
    'react',
    'build',
    'dist',
  ],
  source: {
    github: 'JuanQP/vite-plugin-make-offline',
    npm: 'vite-plugin-make-offline',
  },
  links: {
    github: 'https://github.com/JuanQP/vite-plugin-make-offline',
    npm: 'https://www.npmjs.com/package/vite-plugin-make-offline',
    website: 'https://github.com/JuanQP/vite-plugin-make-offline#readme',
  },
  stats: {
    stars: 15,
    downloads: {
      monthly: 254,
      weekly: 77,
    },
  },
})
