import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'eve',
  description: 'Filesystem-first framework for durable backend AI agents that run anywhere.',
  icon: 'icon:eve',
  category: 'nuxt',
  types: [
    'AI',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/vercel/eve',
    npm: 'https://npmjs.com/package/eve',
    website: 'https://eve.dev',
  },
  source: {
    github: 'vercel/eve',
    npm: 'eve',
  },
})
