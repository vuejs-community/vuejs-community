import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tailwindcss-source',
  description: 'A TailwindCss v4 `@source` plugin for monorepo projects.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'tailwindcss',
    'source',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/againstah-rgb/tailwindcss-source',
    npm: 'https://www.npmjs.com/package/tailwindcss-source',
    website: 'https://github.com/againstah-rgb/tailwindcss-source#readme',
  },
  source: {
    github: 'againstah-rgb/tailwindcss-source',
    npm: 'tailwindcss-source',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 2,
    },
  },
})
