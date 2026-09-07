import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-meta-pixel',
  description: 'Meta (Facebook) pixel integration for Nuxt. Multi-pixel, auto page view and more.',
  icon: '',
  category: 'nuxt',
  types: [
    'Analytics',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/tanukijs/meta-pixel',
    npm: 'https://npmjs.com/package/nuxt-meta-pixel',
    website: 'https://github.com/tanukijs/meta-pixel',
  },
  source: {
    github: 'tanukijs/meta-pixel#dev/packages/nuxt-meta-pixel',
    npm: 'nuxt-meta-pixel',
  },
  stats: {
    stars: 30,
    downloads: {
      monthly: 6541,
      weekly: 1544,
    },
  },
})
