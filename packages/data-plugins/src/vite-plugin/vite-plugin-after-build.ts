import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-after-build',
  description: 'vite-plugin-after-build is a Vite plugin that allows you to perform actions after the build process, such as automatically updating the version number or customizing other tasks.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'increment version',
    'build auto version',
  ],
  source: {
    github: 'ciuwa/vite-plugin-after-build',
    npm: 'vite-plugin-after-build',
  },
  links: {
    github: 'https://github.com/ciuwa/vite-plugin-after-build',
    npm: 'https://www.npmjs.com/package/vite-plugin-after-build',
    website: 'https://github.com/ciuwa/vite-plugin-after-build.git',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
