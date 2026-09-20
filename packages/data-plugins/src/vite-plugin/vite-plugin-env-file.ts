import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-env-file',
  description: 'This Vite plugin allows you to dynamically update your `.env` file during the build process. It\'s particularly useful for injecting environment variables that depend on the build or development server settings.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-env-file',
  },
  source: {
    npm: 'vite-plugin-env-file',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 320,
      weekly: 35,
    },
  },
})
