import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-posthtml',
  description: 'A Vite plugin for PostHTML',
  icon: 'logos:vite-icon',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'posthtml',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'chromeos/static-site-scaffold-modules',
    npm: 'vite-plugin-posthtml',
  },
  links: {
    github: 'https://github.com/chromeos/static-site-scaffold-modules',
    npm: 'https://www.npmjs.com/package/vite-plugin-posthtml',
  },
  stats: {
    downloads: {
      monthly: 93,
      weekly: 24,
    },
  },
})
