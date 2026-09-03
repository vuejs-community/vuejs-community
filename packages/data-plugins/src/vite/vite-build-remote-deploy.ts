import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-build-remote-deploy',
  description: 'Vite and webpack are packaged and automatically published to remote services.',
  version: '1.0.4',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'webpack-plugin',
    'remote deploy',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-build-remote-deploy',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 0,
    },
  },
})
