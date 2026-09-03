import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@velocitykode/velocity-vite-plugin',
  description: 'Vite plugin for Velocity Framework apps - manages public/hot, sets build defaults, and wires entrypoints so the framework\'s bond/vite Go helper resolves the right URLs in dev and prod.',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'velocity',
    'velocitykode',
    'inertia',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/velocitykode/velocity-vite-plugin',
    npm: 'https://www.npmjs.com/package/@velocitykode/velocity-vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 269,
      weekly: 72,
    },
  },
})
