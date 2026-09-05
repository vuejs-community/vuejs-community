import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-pdf-preview',
  description: 'Preview modern webpages as PDF',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'pdf-preview',
    'pdf',
    'react-pdf',
    'vue-pdf',
    'svelte-pdf',
    'html-pdf',
    'puppeteer',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/davidjbng/vite-plugin-pdf-preview',
    npm: 'https://www.npmjs.com/package/vite-plugin-pdf-preview',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
