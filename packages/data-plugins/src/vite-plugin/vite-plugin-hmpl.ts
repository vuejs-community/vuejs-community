import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-hmpl',
  description: 'Plugin for files with .hmpl extension for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'hmpl',
    'hmpl-js',
    'plugin',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/hmpl-language/vite-plugin-hmpl',
    npm: 'https://www.npmjs.com/package/vite-plugin-hmpl',
    website: 'https://hmpl-lang.dev/vite-plugin.html',
  },
  source: {
    github: 'hmpl-language/vite-plugin-hmpl',
    npm: 'vite-plugin-hmpl',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 16,
      weekly: 4,
    },
  },
})
