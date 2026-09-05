import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nuxt-mail',
  description: 'Adds email sending capability to a Nuxt.js app. Adds a server route, an injected variable, and uses nodemailer to send emails.',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/dword-design/nuxt-mail',
    npm: 'https://npmjs.com/package/nuxt-mail',
    website: 'https://github.com/dword-design/nuxt-mail',
  },
  source: {
    github: 'dword-design/nuxt-mail',
    npm: 'nuxt-mail',
  },
  stats: {
    stars: 329,
    downloads: {
      monthly: 4899,
      weekly: 1055,
    },
  },
})
