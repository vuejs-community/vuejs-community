import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@chicory-lang/vite-plugin-chicory',
  description: 'Plugin to allow imports of Chicory (".chic") files in your Vite project',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'chicory',
    'chicory-lang',
  ],
  source: {
    github: 'chicory-lang/vite-plugin-chicory',
    npm: '@chicory-lang/vite-plugin-chicory',
  },
  links: {
    github: 'https://github.com/chicory-lang/vite-plugin-chicory',
    npm: 'https://www.npmjs.com/package/@chicory-lang/vite-plugin-chicory',
    website: 'https://github.com/chicory-lang/vite-plugin-chicory#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 40,
      weekly: 3,
    },
  },
})
