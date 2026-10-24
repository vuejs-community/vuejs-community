import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'ferrolink',
  description: 'Fast, parallel link checker for static HTML builds: cross-page links, anchors, and assets. Native, with a Vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'anchors',
    'broken-links',
    'html',
    'link-checker',
    'napi',
    'static-site',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/sebastian-software/ferrolink',
    npm: 'https://www.npmjs.com/package/ferrolink',
    website: 'https://github.com/sebastian-software/ferrolink/tree/main/node#readme',
  },
  source: {
    github: 'sebastian-software/ferrolink',
    npm: 'ferrolink',
  },
})
