import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-inject-multi-html',
  description: 'Vite plugin for injecting variables into HTML templates using {{key}} placeholders, and craeting multiple html output files from index.html',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'html',
    'template',
    'placeholder',
    'plugin',
  ],
  source: {
    github: 'cmdsreedev/vite-plugin-inject-multi-html',
    npm: 'vite-plugin-inject-multi-html',
  },
  links: {
    github: 'https://github.com/cmdsreedev/vite-plugin-inject-multi-html',
    npm: 'https://www.npmjs.com/package/vite-plugin-inject-multi-html',
    website: 'https://github.com/cmdsreedev/vite-plugin-inject-multi-html#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
