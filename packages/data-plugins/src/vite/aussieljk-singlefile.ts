import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@aussieljk/singlefile',
  description: 'Vite plugin to bundle a React app into a single HTML file',
  version: '0.2.3-rc.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'bundler',
    'esbuild',
    'single-file',
    'html',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/aussieljk/singlefile',
    npm: 'https://www.npmjs.com/package/@aussieljk/singlefile',
  },
  stats: {
    downloads: {
      monthly: 27,
      weekly: 2,
    },
  },
})
