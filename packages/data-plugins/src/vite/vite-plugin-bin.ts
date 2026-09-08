import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bin',
  description: 'Use Vite to bundle executable scripts.',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'Shakeskeyboarde/vite-plugin-bin',
    npm: 'vite-plugin-bin',
  },
  links: {
    github: 'https://github.com/Shakeskeyboarde/vite-plugin-bin',
    npm: 'https://www.npmjs.com/package/vite-plugin-bin',
  },
  stats: {
    downloads: {
      monthly: 55,
      weekly: 7,
    },
  },
})
