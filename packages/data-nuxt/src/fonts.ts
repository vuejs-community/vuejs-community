import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'fonts',
  description: 'Add custom web fonts with performance in mind.',
  icon: 'icon:nuxt',
  category: 'nuxt',
  types: [
    'Icons & Fonts',
  ],
  filter: [
    'official',
  ],
  links: {
    github: 'https://github.com/nuxt/fonts',
    npm: 'https://npmjs.com/package/@nuxt/fonts',
    website: 'https://nuxt.com/modules/fonts',
  },
  source: {
    github: 'nuxt/fonts',
    npm: '@nuxt/fonts',
  },
})
