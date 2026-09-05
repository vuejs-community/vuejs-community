import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bin',
  description: 'Use Vite to bundle executable scripts.',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'bin',
    'chmod',
    'preserve',
    'shebang',
    'executable',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Shakeskeyboarde/vite-plugin-bin',
    npm: 'https://www.npmjs.com/package/vite-plugin-bin',
  },
  stats: {
    downloads: {
      monthly: 49,
      weekly: 13,
    },
  },
})
