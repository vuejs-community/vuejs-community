import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bin',
  description: 'Use Vite to bundle executable scripts.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'Shakeskeyboarde/vite-plugin-bin',
    npm: 'vite-plugin-bin',
  },
  links: {
    github: 'https://github.com/Shakeskeyboarde/vite-plugin-bin',
    npm: 'https://www.npmjs.com/package/vite-plugin-bin',
    website: 'https://github.com/Shakeskeyboarde/vite-plugin-bin#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 48,
      weekly: 6,
    },
  },
})
