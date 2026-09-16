import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nabla/vite-plugin-eslint',
  description: 'Plugs ESLint into Vite dev server',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'eslint',
    'vite-plugin',
  ],
  source: {
    github: 'nabla/vite-plugin-eslint',
    npm: '@nabla/vite-plugin-eslint',
  },
  links: {
    github: 'https://github.com/nabla/vite-plugin-eslint',
    npm: 'https://www.npmjs.com/package/@nabla/vite-plugin-eslint',
    website: 'https://github.com/nabla/vite-plugin-eslint#readme',
  },
  stats: {
    stars: 143,
    downloads: {
      monthly: 559173,
      weekly: 104599,
    },
  },
})
