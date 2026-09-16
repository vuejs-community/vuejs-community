import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-posthtml',
  description: 'A Vite plugin for PostHTML',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'posthtml',
  ],
  source: {
    github: 'chromeos/static-site-scaffold-modules',
    npm: 'vite-plugin-posthtml',
  },
  links: {
    github: 'https://github.com/chromeos/static-site-scaffold-modules',
    npm: 'https://www.npmjs.com/package/vite-plugin-posthtml',
    website: 'https://github.com/chromeos/static-site-scaffold-modules#readme',
  },
  stats: {
    stars: 59,
    downloads: {
      monthly: 113,
      weekly: 32,
    },
  },
})
