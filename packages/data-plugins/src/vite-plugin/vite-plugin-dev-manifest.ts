import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dev-manifest',
  description: 'Vite plugin for generating manifest during dev server',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'wordpress',
    'backend integration',
  ],
  source: {
    github: 'owlsdepartment/vite-plugin-dev-manifest',
    npm: 'vite-plugin-dev-manifest',
  },
  links: {
    github: 'https://github.com/owlsdepartment/vite-plugin-dev-manifest',
    npm: 'https://www.npmjs.com/package/vite-plugin-dev-manifest',
    website: 'https://github.com/owlsdepartment/vite-plugin-dev-manifest#readme',
  },
  stats: {
    stars: 28,
    downloads: {
      monthly: 14627,
      weekly: 2736,
    },
  },
})
