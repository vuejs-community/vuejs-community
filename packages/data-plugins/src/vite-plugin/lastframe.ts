import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'lastframe',
  description: 'Paint the last frame your users saw before your JavaScript loads. Instant revisits for client-rendered apps, no SSR required.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'lastframe',
    'csr',
    'spa',
    'perceived-performance',
    'instant-loading',
    'snapshot',
    'skeleton',
    'indexeddb',
    'view-transitions',
    'vite-plugin',
    'react',
  ],
  links: {
    github: 'https://github.com/joseph0926/lastframe',
    npm: 'https://www.npmjs.com/package/lastframe',
    website: 'https://joseph0926.github.io/lastframe/',
  },
  source: {
    github: 'joseph0926/lastframe',
    npm: 'lastframe',
  },
})
