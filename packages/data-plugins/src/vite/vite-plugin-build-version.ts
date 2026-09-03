import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-version',
  description: '记录下本次构建的package.json版本',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'build',
    'version',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Webming19/vite-plugin-build-version',
    npm: 'https://www.npmjs.com/package/vite-plugin-build-version',
  },
  stats: {
    downloads: {
      monthly: 35,
      weekly: 1,
    },
  },
})
