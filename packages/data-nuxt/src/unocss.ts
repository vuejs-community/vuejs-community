import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unocss',
  description: 'The instant on-demand atomic CSS engine.',
  icon: 'icon:unocss',
  category: 'nuxt',
  types: [
    'CSS',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/unocss/unocss',
    npm: 'https://npmjs.com/package/@unocss/nuxt',
    website: 'https://github.com/unocss/unocss',
  },
  source: {
    github: 'unocss/unocss#main/packages-integrations/nuxt',
    npm: '@unocss/nuxt',
  },
  stats: {
    stars: 18947,
    downloads: {
      monthly: 300058,
      weekly: 53302,
    },
  },
})
