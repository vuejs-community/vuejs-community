import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'doppler',
  description: 'Integrate your Doppler secrets into your Nuxt build',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/JamieCurnow/nuxt-doppler',
    npm: 'https://npmjs.com/package/nuxt-doppler',
    website: 'https://github.com/JamieCurnow/nuxt-doppler',
  },
  source: {
    github: 'JamieCurnow/nuxt-doppler',
    npm: 'nuxt-doppler',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 2060,
      weekly: 391,
    },
  },
})
