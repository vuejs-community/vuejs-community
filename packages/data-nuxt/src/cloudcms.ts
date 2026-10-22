import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'cloudcms',
  description: 'CloudCMS integration',
  icon: '',
  category: 'nuxt',
  types: [
    'CMS & Content',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/gitana/cloudcms-nuxt',
    npm: 'https://npmjs.com/package/cloudcms-nuxt',
    website: 'https://github.com/gitana/cloudcms-nuxt',
  },
  source: {
    github: 'gitana/cloudcms-nuxt',
    npm: 'cloudcms-nuxt',
  },
})
