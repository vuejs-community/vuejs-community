import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'lettermint',
  description: 'Send emails with Lettermint',
  icon: 'icon:lettermint',
  category: 'nuxt',
  types: [
    'Email & Notifications',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/lettermint/nuxt-lettermint',
    npm: 'https://npmjs.com/package/nuxt-lettermint',
    website: 'https://github.com/lettermint/nuxt-lettermint',
  },
  source: {
    github: 'lettermint/nuxt-lettermint',
    npm: 'nuxt-lettermint',
  },
})
