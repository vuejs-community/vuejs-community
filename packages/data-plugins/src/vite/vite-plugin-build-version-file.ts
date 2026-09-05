import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-version-file',
  description: 'A Vite plugin that emits version.json and injects version metadata into HTML.',
  version: '0.1.17',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vue3',
    'build-version',
    'version-json',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-build-version-file',
  },
  stats: {
    downloads: {
      monthly: 915,
      weekly: 57,
    },
  },
})
