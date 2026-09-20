import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-build-remote-deploy',
  description: 'Vite and webpack are packaged and automatically published to remote services.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'webpack-plugin',
    'remote deploy',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-build-remote-deploy',
  },
  source: {
    npm: 'vite-build-remote-deploy',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 5,
      weekly: 1,
    },
  },
})
