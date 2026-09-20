import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-remote-module',
  description: 'Load HTTP remote module in the Vite project',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'remote-module',
  ],
  links: {
    github: 'https://github.com/tangxiangmin/vite-plugin-remote-module',
    npm: 'https://www.npmjs.com/package/vite-plugin-remote-module',
    website: 'https://github.com/tangxiangmin/vite-plugin-remote-module#readme',
  },
  source: {
    github: 'tangxiangmin/vite-plugin-remote-module',
    npm: 'vite-plugin-remote-module',
  },
  stats: {
    stars: 19,
    downloads: {
      monthly: 43,
      weekly: 10,
    },
  },
})
