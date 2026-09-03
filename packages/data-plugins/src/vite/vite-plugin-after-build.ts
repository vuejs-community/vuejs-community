import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-after-build',
  description: 'vite-plugin-after-build is a Vite plugin that allows you to perform actions after the build process, such as automatically updating the version number or customizing other tasks.',
  version: '0.0.21',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'increment version',
    'build auto version',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ciuwa/vite-plugin-after-build',
    npm: 'https://www.npmjs.com/package/vite-plugin-after-build',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 0,
    },
  },
})
