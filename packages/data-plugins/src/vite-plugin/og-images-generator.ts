import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'og-images-generator',
  description: 'Generate OG images from a static folder and / or a middleware. Extract metadata from HTML pages. No headless browser involved. Comes as a CLI, API or plugins.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'gracile-web/gracile',
    npm: 'og-images-generator',
  },
  links: {
    github: 'https://github.com/gracile-web/gracile',
    npm: 'https://www.npmjs.com/package/og-images-generator',
    website: 'https://github.com/gracile-web/gracile#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 123,
      weekly: 18,
    },
  },
})
