import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-linker',
  description: 'Build and update a WIP module into the current running project',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'npm-link',
  ],
  source: {
    github: 'SubZtep/vite-plugin-linker',
    npm: 'vite-plugin-linker',
  },
  links: {
    github: 'https://github.com/SubZtep/vite-plugin-linker',
    npm: 'https://www.npmjs.com/package/vite-plugin-linker',
    website: 'https://github.com/SubZtep/vite-plugin-linker#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
