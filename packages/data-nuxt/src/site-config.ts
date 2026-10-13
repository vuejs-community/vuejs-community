import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'site-config',
  description: 'Shared site configuration for Nuxt modules.',
  icon: 'icon:site-config',
  category: 'nuxt',
  types: [
    'SEO',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/harlan-zw/nuxt-site-config',
    npm: 'https://npmjs.com/package/nuxt-site-config',
    website: 'https://nuxtseo.com/docs/site-config/getting-started/introduction',
  },
  source: {
    github: 'harlan-zw/nuxt-site-config',
    npm: 'nuxt-site-config',
  },
})
