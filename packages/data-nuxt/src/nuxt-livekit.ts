import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-livekit',
  description: 'LiveKit integration: realtime video, audio, and data with client composables and server utilities',
  icon: 'icon:nuxt-livekit',
  category: 'nuxt',
  types: [
    'Realtime',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/nuxtaid/nuxt-livekit',
    npm: 'https://npmjs.com/package/nuxt-livekit',
    website: 'https://github.com/nuxtaid/nuxt-livekit#readme',
  },
  source: {
    github: 'nuxtaid/nuxt-livekit',
    npm: 'nuxt-livekit',
  },
})
