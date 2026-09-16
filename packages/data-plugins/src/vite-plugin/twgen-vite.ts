import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@twgen/vite',
  description: 'Vite plugin for twgen — regenerates the Tailwind v4 theme CSS from your tokens on build and HMR',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'tailwind',
    'tailwindcss',
    'tailwind-v4',
    'vite-plugin',
    'design-tokens',
    'theme',
    'twgen',
  ],
  source: {
    github: 'hunterdavisdev/twgen',
    npm: '@twgen/vite',
  },
  links: {
    github: 'https://github.com/hunterdavisdev/twgen',
    npm: 'https://www.npmjs.com/package/@twgen/vite',
    website: 'https://github.com/hunterdavisdev/twgen#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 41,
      weekly: 4,
    },
  },
})
