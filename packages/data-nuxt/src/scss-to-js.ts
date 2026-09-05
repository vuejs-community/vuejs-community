import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'scss-to-js',
  description: 'Load SCSS Variables into Nuxt instance for use in Templates/Scripts.',
  category: 'nuxt',
  types: [
    'CSS',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/sugoidesune/nuxt-scss-to-js',
    npm: 'https://npmjs.com/package/nuxt-scss-to-js',
    website: 'https://github.com/sugoidesune/nuxt-scss-to-js',
  },
  source: {
    github: 'sugoidesune/nuxt-scss-to-js',
    npm: 'nuxt-scss-to-js',
  },
  stats: {
    stars: 27,
    downloads: {
      monthly: 94,
      weekly: 21,
    },
  },
})
