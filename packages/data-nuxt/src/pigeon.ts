import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'pigeon',
  description: 'Send and receive messages across Telegram, Slack, Discord, ntfy, Mastodon, Bluesky and any webhook.',
  icon: 'icon:pigeon',
  category: 'nuxt',
  types: [
    'Libraries',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/Flo0806/nuxt-pigeon',
    npm: 'https://npmjs.com/package/nuxt-pigeon',
    website: 'https://pigeon.fh-softdev.de',
  },
  source: {
    github: 'Flo0806/nuxt-pigeon',
    npm: 'nuxt-pigeon',
  },
})
