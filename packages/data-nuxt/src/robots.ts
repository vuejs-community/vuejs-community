import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'robots',
  description: 'Tame the robots crawling and indexing your site.',
  icon: 'icon:simple-robots',
  category: 'nuxt',
  types: [
    'SEO',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-modules/robots',
    npm: 'https://npmjs.com/package/@nuxtjs/robots',
    website: 'https://nuxtseo.com/docs/robots/getting-started/installation',
  },
  source: {
    github: 'nuxt-modules/robots',
    npm: '@nuxtjs/robots',
  },
})
