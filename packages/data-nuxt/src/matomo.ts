import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'matomo',
  description: 'Add Matomo analytics to your app. This plugin automatically sends first page and route change events to Matomo',
  icon: '',
  category: 'nuxt',
  types: [
    'Analytics',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/pimlie/nuxt-matomo',
    npm: 'https://npmjs.com/package/nuxt-matomo',
    website: 'https://github.com/pimlie/nuxt-matomo',
  },
  source: {
    github: 'pimlie/nuxt-matomo',
    npm: 'nuxt-matomo',
  },
})
