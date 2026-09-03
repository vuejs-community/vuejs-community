import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'tailwindcss-source',
  description: 'A TailwindCss v4 `@source` plugin for monorepo projects.',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'tailwindcss',
    'source',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/againstah-rgb/tailwindcss-source',
    npm: 'https://www.npmjs.com/package/tailwindcss-source',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 15,
    },
  },
})
