import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-inject',
  description: 'A Vite plugin to inject version info into index.html',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'html',
    'inject',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-version-inject',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 6,
    },
  },
})
