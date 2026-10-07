import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@liquefy/cascade.prerender',
  description: 'Cascade prerendered: every address of a built app rendered in a real browser and written down as a page of its own - for search engines, link previews and AI - with head tags, structured data and a sitemap. A Vite plugin and a CLI.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'prerender',
    'ssg',
    'seo',
    'sitemap',
    'vite-plugin',
    'cascade',
  ],
  links: {
    github: 'https://github.com/erobwen/liquefy',
    npm: 'https://www.npmjs.com/package/@liquefy/cascade.prerender',
    website: 'https://github.com/erobwen/liquefy/tree/main/cascade.prerender#readme',
  },
  source: {
    github: 'erobwen/liquefy',
    npm: '@liquefy/cascade.prerender',
  },
})
