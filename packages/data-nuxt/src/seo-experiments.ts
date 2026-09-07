import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'seo-experiments',
  description: 'Powerful SEO DX improvements.',
  icon: 'icon:seo-experiments',
  category: 'nuxt',
  types: [
    'SEO',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/harlan-zw/nuxt-seo-utils',
    npm: 'https://npmjs.com/package/nuxt-seo-utils',
    website: 'https://nuxtseo.com/docs/seo-utils/getting-started/installation',
  },
  source: {
    github: 'harlan-zw/nuxt-seo-utils',
    npm: 'nuxt-seo-utils',
  },
  stats: {
    stars: 130,
    downloads: {
      monthly: 394634,
      weekly: 78765,
    },
  },
})
