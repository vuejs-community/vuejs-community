import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-solarite',
  description: 'Vite plugin that compiles JSX/TSX to Solarite precompile output, giving JSX the same runtime speed as h tagged templates.',
  icon: 'logos:vite-icon',
  version: '0.8.0',
  category: 'plugin',
  tags: [
    'solarite',
    'jsx',
    'tsx',
    'vite',
    'vite-plugin',
    'precompile',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-solarite',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-solarite',
  },
  stats: {
    downloads: {
      monthly: 187,
      weekly: 4,
    },
  },
})
