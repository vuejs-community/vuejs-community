import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@srcset/vite-plugin',
  description: 'Vite plugin for generating responsive images.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'srcset',
    'image',
    'picture',
    'responsive',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'TrigenSoftware/srcset',
    npm: '@srcset/vite-plugin',
  },
  links: {
    github: 'https://github.com/TrigenSoftware/srcset',
    npm: 'https://www.npmjs.com/package/@srcset/vite-plugin',
    website: 'https://srcset.js.org/integrations/vite-plugin/',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 43,
      weekly: 43,
    },
  },
})
