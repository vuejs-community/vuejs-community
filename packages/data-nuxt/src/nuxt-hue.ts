import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-hue',
  description: 'Sync Philips Hue lights with your dev server\'s build and error status.',
  icon: 'icon:nuxt-hue',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/lihbr/nuxt-hue',
    npm: 'https://npmjs.com/package/nuxt-hue',
    website: 'https://github.com/lihbr/nuxt-hue',
  },
  source: {
    github: 'lihbr/nuxt-hue',
    npm: 'nuxt-hue',
  },
})
