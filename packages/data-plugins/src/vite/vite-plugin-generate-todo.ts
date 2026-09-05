import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-generate-todo',
  description: 'A simple Vite plugin that automatically generates a `TODO.md` file by extracting `[TODO :: ...]`',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite-plugin-todo',
    'vite',
    'plugin',
    'todo',
    'md',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/DonggunLim/vite-plugin-generate-todo',
    npm: 'https://www.npmjs.com/package/vite-plugin-generate-todo',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 2,
    },
  },
})
