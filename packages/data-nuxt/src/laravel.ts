import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'laravel',
  description: 'Nuxt CLI extension for using Laravel as a backend',
  icon: '',
  category: 'nuxt',
  types: [
    'Backend & Database',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/m2sd/nuxt-laravel',
    npm: 'https://npmjs.com/package/nuxt-laravel',
    website: 'https://github.com/m2sd/nuxt-laravel',
  },
  source: {
    github: 'm2sd/nuxt-laravel',
    npm: 'nuxt-laravel',
  },
})
