import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-solarite',
  description: 'Vite plugin that compiles JSX/TSX to Solarite precompile output, giving JSX the same runtime speed as h tagged templates.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'solarite',
    'jsx',
    'tsx',
    'vite',
    'vite-plugin',
    'precompile',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-solarite',
  },
  source: {
    npm: 'vite-plugin-solarite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 29,
      weekly: 2,
    },
  },
})
