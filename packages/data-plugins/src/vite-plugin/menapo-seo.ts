import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@menapo/seo',
  description: 'Head tags, hreflang and sitemaps for kit apps: one head({ title, description, image }) call per page, in every framework',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'head',
    'meta',
    'open-graph',
    'seo',
    'sitemap',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/menapo/kit',
    npm: 'https://www.npmjs.com/package/@menapo/seo',
    website: 'https://github.com/menapo/kit/blob/main/packages/seo/README.md',
  },
  source: {
    github: 'menapo/kit',
    npm: '@menapo/seo',
  },
})
