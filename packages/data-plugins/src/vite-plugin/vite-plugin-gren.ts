import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-gren',
  description: 'A vite plugin for the Gren programming language',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'gren',
    'gren-lang',
    'rollup-plugin',
    'vite-plugin',
  ],
  source: {
    github: 'gren-lang/vite-plugin-gren',
    npm: 'vite-plugin-gren',
  },
  links: {
    github: 'https://github.com/gren-lang/vite-plugin-gren',
    npm: 'https://www.npmjs.com/package/vite-plugin-gren',
    website: 'https://github.com/gren-lang/vite-plugin-gren',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 55,
      weekly: 4,
    },
  },
})
