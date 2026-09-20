import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vueform-builder',
  description: 'Official Vueform Builder module for Nuxt',
  icon: 'icon:vueform',
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
    github: 'vueform/builder',
    npm: '@vueform/builder-nuxt',
  },
})
