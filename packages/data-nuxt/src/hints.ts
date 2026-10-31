import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'hints',
  description: 'Shows hints for aspects of your application such as performance, security, and more!',
  icon: 'icon:nuxt',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    'official',
  ],
  links: {
    github: 'https://github.com/nuxt/hints',
    npm: 'https://npmjs.com/package/@nuxt/hints',
    website: 'https://nuxt.com/modules/hints',
  },
  source: {
    github: 'nuxt/hints',
    npm: '@nuxt/hints',
  },
})
