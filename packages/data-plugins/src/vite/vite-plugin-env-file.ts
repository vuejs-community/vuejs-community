import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-env-file',
  description: 'This Vite plugin allows you to dynamically update your `.env` file during the build process. It\'s particularly useful for injecting environment variables that depend on the build or development server settings.',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-env-file',
  },
  stats: {
    downloads: {
      monthly: 258,
      weekly: 63,
    },
  },
})
