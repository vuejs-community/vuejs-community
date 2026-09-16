import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rescript/vite-plugin',
  description: 'The official ReScript plugin for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rescript',
    'source-map',
    'sourcemap',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'rescript-lang/rescript-vite-plugin',
    npm: '@rescript/vite-plugin',
  },
  links: {
    github: 'https://github.com/rescript-lang/rescript-vite-plugin',
    npm: 'https://www.npmjs.com/package/@rescript/vite-plugin',
    website: 'https://github.com/rescript-lang/rescript-vite-plugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 77,
      weekly: 77,
    },
  },
})
