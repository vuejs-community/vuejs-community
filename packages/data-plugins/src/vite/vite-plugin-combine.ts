import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-combine',
  description: 'Combines multiple module files into a single target file. It supports four modes: named exports, default exports, automatic exports, and no exports, and can auto-generate corresponding import statements based on configuration.',
  version: '8.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite-plugin-combine',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/fengxinming/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-combine',
  },
  stats: {
    downloads: {
      monthly: 420,
      weekly: 184,
    },
  },
})
