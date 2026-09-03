import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'og-images-generator',
  description: 'Generate OG images from a static folder and / or a middleware. Extract metadata from HTML pages. No headless browser involved. Comes as a CLI, API or plugins.',
  version: '0.6.2',
  category: 'plugin',
  tags: [
    'og-images',
    'social-networks',
    'open-graph',
    'svg-png',
    'static',
    'seo',
    'ssg',
    'cli',
    'vite-plugin',
    'withastro',
    'api',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/gracile-web/gracile',
    npm: 'https://www.npmjs.com/package/og-images-generator',
  },
  stats: {
    downloads: {
      monthly: 208,
      weekly: 46,
    },
  },
})
