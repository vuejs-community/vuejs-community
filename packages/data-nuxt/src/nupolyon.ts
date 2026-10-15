import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nupolyon',
  description: 'Inject polyfills based on your browserslist config, from a CDN or self-hosted.',
  icon: '',
  category: 'nuxt',
  types: [
    'Performance',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/adenvt/nupolyon',
    npm: 'https://npmjs.com/package/nupolyon',
    website: 'https://github.com/adenvt/nupolyon',
  },
  source: {
    github: 'adenvt/nupolyon',
    npm: 'nupolyon',
  },
})
