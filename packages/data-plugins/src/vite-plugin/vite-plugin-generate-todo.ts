import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-generate-todo',
  description: 'A simple Vite plugin that automatically generates a `TODO.md` file by extracting `[TODO :: ...]`',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite-plugin-todo',
    'vite',
    'plugin',
    'todo',
    'md',
  ],
  links: {
    github: 'https://github.com/DonggunLim/vite-plugin-generate-todo',
    npm: 'https://www.npmjs.com/package/vite-plugin-generate-todo',
    website: 'https://github.com/DonggunLim/vite-plugin-generate-todo#readme',
  },
  source: {
    github: 'DonggunLim/vite-plugin-generate-todo',
    npm: 'vite-plugin-generate-todo',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
