import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-log',
  description: 'A Vite plugin to inject version information into HTML',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'version',
    'git',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-version-log',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 0,
    },
  },
})
