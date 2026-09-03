import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@helloliang/vite-plugin-version-json',
  description: 'Vite plugin to generate version.json with Git info and build time',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'git',
    'build-info',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@helloliang/vite-plugin-version-json',
  },
  stats: {
    downloads: {
      monthly: 17,
      weekly: 11,
    },
  },
})
