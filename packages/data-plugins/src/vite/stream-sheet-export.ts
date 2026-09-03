import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'stream-sheet-export',
  description: 'Browser-side streaming Excel/CSV exporter. Supports remote CSV/Excel URLs (CORS transform or direct download), JSON rows, AsyncIterable, custom formats and cell styles.',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'excel',
    'xlsx',
    'csv',
    'export',
    'stream',
    'ooXML',
    'spreadsheet',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/chenscDev/stream-sheet-export',
    npm: 'https://www.npmjs.com/package/stream-sheet-export',
  },
  stats: {
    downloads: {
      monthly: 25,
      weekly: 2,
    },
  },
})
