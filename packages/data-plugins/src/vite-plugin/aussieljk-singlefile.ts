import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aussieljk/singlefile',
  description: 'Vite plugin to bundle a React app into a single HTML file',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'bundler',
    'esbuild',
    'single-file',
    'html',
  ],
  links: {
    github: 'https://github.com/aussieljk/singlefile',
    npm: 'https://www.npmjs.com/package/@aussieljk/singlefile',
    website: 'https://github.com/aussieljk/singlefile#readme',
  },
  source: {
    github: 'aussieljk/singlefile',
    npm: '@aussieljk/singlefile',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 48,
      weekly: 19,
    },
  },
})
