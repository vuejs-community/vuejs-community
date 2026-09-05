import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bib',
  description: 'A Vite plugin to import BibTeX files as JS objects.',
  version: '1.0.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'bib',
    'bibliography',
    'bibtex',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ChunxuYang/vite-plugin-bib',
    npm: 'https://www.npmjs.com/package/vite-plugin-bib',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
