import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-naming',
  description: 'Vite plugin for enforce a case style for file and folder.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'file',
    'folder',
    'filename',
    'foldername',
    'naming',
    'naming-conventions',
  ],
  source: {
    npm: 'vite-plugin-naming',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-naming',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
