import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'dopedocs',
  description: 'A typed documentation engine: one source renders to an in-app panel and to crawlable static pages, with AEO/GEO annotation enforced by the compiler.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/junovhs/dopedocs',
    npm: 'https://www.npmjs.com/package/dopedocs',
    website: 'https://github.com/junovhs/dopedocs#readme',
  },
  source: {
    github: 'junovhs/dopedocs',
    npm: 'dopedocs',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 37,
      weekly: 37,
    },
  },
})
