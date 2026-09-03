import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-singlet-tailor',
  description: 'Bundle Vite apps into single HTML files with embedded source, optional Tailwind CDN, and auto-numbered output',
  version: '0.1.1-rc.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'singlefile',
    'single-file',
    'html',
    'bundle',
    'tailwind',
    'cdn',
    'embed',
    'source',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/aussieljk/vite-singlet-tailor',
    npm: 'https://www.npmjs.com/package/vite-singlet-tailor',
  },
  stats: {
    downloads: {
      monthly: 9,
      weekly: 0,
    },
  },
})
