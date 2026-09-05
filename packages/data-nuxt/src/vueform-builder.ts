import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vueform-builder',
  description: 'Official Vueform Builder module for Nuxt',
  category: 'nuxt',
  types: [
    'Libraries',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/vueform/builder',
    npm: 'https://npmjs.com/package/@vueform/builder-nuxt',
    website: 'https://builder.vueform.com',
  },
  source: {
    github: 'vueform/builder#main/nuxt',
    npm: '@vueform/builder-nuxt',
  },
  stats: {
    stars: 717,
    downloads: {
      monthly: 384,
      weekly: 48,
    },
  },
})
