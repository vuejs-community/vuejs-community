import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@unbase-app/pages',
  description: 'Keeps draft pages out of a site\'s production build: an Astro integration and a Vite plugin, for Unbase.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'astro',
    'astro-integration',
    'vite-plugin',
    'react-router',
    'drafts',
    'unbase',
  ],
  links: {
    github: 'https://github.com/unbase-app/kit',
    npm: 'https://www.npmjs.com/package/@unbase-app/pages',
    website: 'https://github.com/unbase-app/kit/tree/main/pages#readme',
  },
  source: {
    github: 'unbase-app/kit',
    npm: '@unbase-app/pages',
  },
})
