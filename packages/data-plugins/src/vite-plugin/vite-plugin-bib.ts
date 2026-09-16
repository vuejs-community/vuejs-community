import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-bib',
  description: 'A Vite plugin to import BibTeX files as JS objects.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'bib',
    'bibliography',
    'bibtex',
  ],
  source: {
    github: 'ChunxuYang/vite-plugin-bib',
    npm: 'vite-plugin-bib',
  },
  links: {
    github: 'https://github.com/ChunxuYang/vite-plugin-bib',
    npm: 'https://www.npmjs.com/package/vite-plugin-bib',
    website: 'https://github.com/ChunxuYang/vite-plugin-bib/tree/main/#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 1,
    },
  },
})
