import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@unbase-app/vite',
  description: 'Unbase in a Vite + React Router site: draft pages kept out of production builds, comments on the live site with ?comment, and Unbase\'s cookieless analytics.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'react-router',
    'drafts',
    'comments',
    'analytics',
    'unbase',
  ],
  links: {
    github: 'https://github.com/unbase-app/kit',
    npm: 'https://www.npmjs.com/package/@unbase-app/vite',
    website: 'https://github.com/unbase-app/kit/tree/main/vite#readme',
  },
  source: {
    github: 'unbase-app/kit',
    npm: '@unbase-app/vite',
  },
})
