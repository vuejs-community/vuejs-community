import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tresjs',
  description: 'Create 3D experiences in your Nuxt application using TresJS.',
  icon: 'icon:tresjs',
  category: 'nuxt',
  types: [
    'Libraries',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/tresjs/tres',
    npm: 'https://npmjs.com/package/@tresjs/nuxt',
    website: 'https://docs.tresjs.org/getting-started/installation#nuxt-project',
  },
  source: {
    github: 'tresjs/tres',
    npm: '@tresjs/nuxt',
  },
})
