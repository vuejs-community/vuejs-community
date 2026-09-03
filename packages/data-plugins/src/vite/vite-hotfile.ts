import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-hotfile',
  description: 'A Vite plugin that generates a `.hotfile` containing the development server URL.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'hotfile',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/protibimbok/vite-hotfile',
    npm: 'https://www.npmjs.com/package/vite-hotfile',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 2,
    },
  },
})
