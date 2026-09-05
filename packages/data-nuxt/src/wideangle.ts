import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'wideangle',
  description: 'Nuxt module to integrate Wide Angle Analytics',
  category: 'nuxt',
  types: [
    'Analytics',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/wideangleanalytics/wideangle-nuxt',
    npm: 'https://npmjs.com/package/wideangle-nuxt',
    website: 'https://inputobjects.com/',
  },
  source: {
    github: 'wideangleanalytics/wideangle-nuxt',
    npm: 'wideangle-nuxt',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 185,
      weekly: 30,
    },
  },
})
