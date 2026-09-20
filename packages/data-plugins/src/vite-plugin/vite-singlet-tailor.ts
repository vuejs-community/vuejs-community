import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-singlet-tailor',
  description: 'Bundle Vite apps into single HTML files with embedded source, optional Tailwind CDN, and auto-numbered output',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/aussieljk/vite-singlet-tailor',
    npm: 'https://www.npmjs.com/package/vite-singlet-tailor',
    website: 'https://github.com/aussieljk/vite-singlet-tailor#readme',
  },
  source: {
    github: 'aussieljk/vite-singlet-tailor',
    npm: 'vite-singlet-tailor',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 30,
      weekly: 22,
    },
  },
})
