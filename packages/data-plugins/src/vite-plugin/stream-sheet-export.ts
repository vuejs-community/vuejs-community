import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'stream-sheet-export',
  description: 'Browser-side streaming Excel/CSV exporter. Supports remote CSV/Excel URLs (CORS transform or direct download), JSON rows, AsyncIterable, custom formats and cell styles.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/chenscDev/stream-sheet-export',
    npm: 'https://www.npmjs.com/package/stream-sheet-export',
    website: 'https://github.com/chenscDev/stream-sheet-export#readme',
  },
  source: {
    github: 'chenscDev/stream-sheet-export',
    npm: 'stream-sheet-export',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 23,
      weekly: 1,
    },
  },
})
