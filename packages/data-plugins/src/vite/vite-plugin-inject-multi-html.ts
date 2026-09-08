import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-inject-multi-html',
  description: 'Vite plugin for injecting variables into HTML templates using {{key}} placeholders, and craeting multiple html output files from index.html',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'html',
    'template',
    'placeholder',
    'plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'cmdsreedev/vite-plugin-inject-multi-html',
    npm: 'vite-plugin-inject-multi-html',
  },
  links: {
    github: 'https://github.com/cmdsreedev/vite-plugin-inject-multi-html',
    npm: 'https://www.npmjs.com/package/vite-plugin-inject-multi-html',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 4,
    },
  },
})
