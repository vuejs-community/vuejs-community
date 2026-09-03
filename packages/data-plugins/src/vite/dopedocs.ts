import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'dopedocs',
  description: 'A typed documentation engine: one source renders to an in-app panel and to crawlable static pages, with AEO/GEO annotation enforced by the compiler.',
  version: '0.2.1',
  category: 'plugin',
  tags: [
    'documentation',
    'docs',
    'aeo',
    'geo',
    'seo',
    'schema.org',
    'json-ld',
    'vite-plugin',
    'static-site',
    'llms-txt',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/junovhs/dopedocs',
    npm: 'https://www.npmjs.com/package/dopedocs',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
