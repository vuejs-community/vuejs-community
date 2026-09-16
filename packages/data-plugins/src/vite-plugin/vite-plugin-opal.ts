import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-opal',
  description: 'Vite plugin for Opal - Compile Ruby to JavaScript',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'opal',
    'ruby',
    'javascript',
  ],
  source: {
    github: 'stofu1234/opal-vite',
    npm: 'vite-plugin-opal',
  },
  links: {
    github: 'https://github.com/stofu1234/opal-vite',
    npm: 'https://www.npmjs.com/package/vite-plugin-opal',
    website: 'https://stofu1234.github.io/opal-vite/',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 96,
      weekly: 3,
    },
  },
})
