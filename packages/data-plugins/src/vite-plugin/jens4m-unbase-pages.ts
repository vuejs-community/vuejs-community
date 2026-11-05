import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jens4m/unbase-pages',
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
    github: 'https://github.com/jens4m/unbase',
    npm: 'https://www.npmjs.com/package/@jens4m/unbase-pages',
    website: 'https://github.com/jens4m/unbase/tree/main/kit/pages#readme',
  },
  source: {
    github: 'jens4m/unbase',
    npm: '@jens4m/unbase-pages',
  },
})
