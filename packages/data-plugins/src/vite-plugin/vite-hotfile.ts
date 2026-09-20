import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-hotfile',
  description: 'A Vite plugin that generates a `.hotfile` containing the development server URL.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'hotfile',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/protibimbok/vite-hotfile',
    npm: 'https://www.npmjs.com/package/vite-hotfile',
    website: 'https://github.com/protibimbok/vite-hotfile#readme',
  },
  source: {
    github: 'protibimbok/vite-hotfile',
    npm: 'vite-hotfile',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
