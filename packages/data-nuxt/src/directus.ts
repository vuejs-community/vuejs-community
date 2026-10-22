import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'directus',
  description: 'Easily connect your app to your Directus server.',
  icon: 'icon:directus',
  category: 'nuxt',
  types: [
    'CMS & Content',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/intevel/nuxt-directus',
    npm: 'https://npmjs.com/package/nuxt-directus',
    website: 'https://nuxt-directus.de/',
  },
  source: {
    github: 'intevel/nuxt-directus',
    npm: 'nuxt-directus',
  },
})
