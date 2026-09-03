import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-effcss',
  description: 'Vite plugin for EffCSS — captures CSS via Vite SSR pipeline, injects into HTML',
  version: '1.0.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/msabitov/vite-plugin-effcss',
    npm: 'https://www.npmjs.com/package/vite-plugin-effcss',
  },
  stats: {
    downloads: {
      monthly: 44,
      weekly: 4,
    },
  },
})
