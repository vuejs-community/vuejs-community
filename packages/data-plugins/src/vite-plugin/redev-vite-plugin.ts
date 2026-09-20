import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'redev-vite-plugin',
  description: 'Vite plugin that injects data-redev-* attributes so DOM clicks map back to source files. Powers redev-cli.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'redev',
    'developer-tools',
    'click-to-edit',
    'react',
    'jsx',
  ],
  links: {
    github: 'https://github.com/abhishek4544/Redev',
    npm: 'https://www.npmjs.com/package/redev-vite-plugin',
    website: 'https://github.com/abhishek4544/Redev#readme',
  },
  source: {
    github: 'abhishek4544/Redev',
    npm: 'redev-vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 3,
    },
  },
})
