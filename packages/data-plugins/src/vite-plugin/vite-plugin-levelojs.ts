import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-levelojs',
  description: 'The official Vite plugin for Levelo JS framework',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'levelojs',
    'jsx',
    'compiler',
    'vite-plugin-levelojs',
  ],
  links: {
    github: 'https://github.com/levelojs/LeveloJS',
    npm: 'https://www.npmjs.com/package/vite-plugin-levelojs',
  },
  source: {
    github: 'levelojs/LeveloJS',
    npm: 'vite-plugin-levelojs',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 29,
      weekly: 4,
    },
  },
})
