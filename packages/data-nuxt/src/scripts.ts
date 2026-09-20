import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'scripts',
  description: 'Add 3rd-party scripts without sacrificing performance.',
  icon: 'icon:nuxt',
  category: 'nuxt',
  types: [
    'Performance',
  ],
  filter: [
    'official',
  ],
  links: {
    github: 'https://github.com/nuxt/scripts',
    npm: 'https://npmjs.com/package/@nuxt/scripts',
    website: 'https://scripts.nuxt.com',
  },
  source: {
    github: 'nuxt/scripts',
    npm: '@nuxt/scripts',
  },
})
