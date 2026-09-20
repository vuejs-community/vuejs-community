import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-pdfjs-viewer',
  description: 'Add PDF.JS Viewer Application to Vite Bundle.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'pdf',
    'viewer',
    'pdfjs',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-pdfjs-viewer',
    website: 'https://gitlab.com/beehiveor/rollup-plugin-pdfjs-viewer#readme',
  },
  source: {
    npm: 'vite-plugin-pdfjs-viewer',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 9,
      weekly: 2,
    },
  },
})
