import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-effcss',
  description: 'Vite plugin for EffCSS — captures CSS via Vite SSR pipeline, injects into HTML',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'plugin',
    'vite-plugin',
    'effcss',
    'css',
    'css-in-ts',
    'css-in-js',
    'zero-config',
  ],
  source: {
    github: 'msabitov/vite-plugin-effcss',
    npm: 'vite-plugin-effcss',
  },
  links: {
    github: 'https://github.com/msabitov/vite-plugin-effcss',
    npm: 'https://www.npmjs.com/package/vite-plugin-effcss',
    website: 'https://github.com/msabitov/vite-plugin-effcss/',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 28,
      weekly: 4,
    },
  },
})
