import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-gleam',
  description: 'Import directly from *.gleam files using Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'gleam',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Enderchief/gleam-tools',
    npm: 'https://www.npmjs.com/package/vite-gleam',
    website: 'https://github.com/Enderchief/gleam-tools/tree/master#readme',
  },
  source: {
    github: 'Enderchief/gleam-tools',
    npm: 'vite-gleam',
  },
  stats: {
    stars: 83,
    downloads: {
      monthly: 191,
      weekly: 44,
    },
  },
})
