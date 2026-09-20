import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@achuan9/vite-plugin-version-log',
  description: 'A Vite plugin to inject version information into HTML',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'version',
    'git',
  ],
  links: {
    github: 'https://github.com/achuan9/achuan9-ecosystem',
    npm: 'https://www.npmjs.com/package/@achuan9/vite-plugin-version-log',
    website: 'https://github.com/achuan9/achuan9-ecosystem/blob/master/packages/vite-plugins/vite-plugin-version-log#readme',
  },
  source: {
    github: 'achuan9/achuan9-ecosystem',
    npm: '@achuan9/vite-plugin-version-log',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
