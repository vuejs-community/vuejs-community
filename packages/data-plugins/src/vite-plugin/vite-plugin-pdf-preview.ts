import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-pdf-preview',
  description: 'Preview modern webpages as PDF',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'davidjbng/vite-plugin-pdf-preview',
    npm: 'vite-plugin-pdf-preview',
  },
  links: {
    github: 'https://github.com/davidjbng/vite-plugin-pdf-preview',
    npm: 'https://www.npmjs.com/package/vite-plugin-pdf-preview',
    website: 'https://github.com/davidjbng/vite-plugin-pdf-preview#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
