import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'bearer-auth',
  description: 'Cookie-session auth backed by an external API that issues bearer tokens, with Redis-stored sessions, CSRF protection and optional ability checks.',
  icon: '',
  category: 'nuxt',
  types: [
    'Security',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/paaqwesilowelltetteh/nuxt-bearer-auth',
    npm: 'https://npmjs.com/package/nuxt-bearer-auth',
    website: 'https://nuxt-bearer-auth.vercel.app/',
  },
  source: {
    github: 'paaqwesilowelltetteh/nuxt-bearer-auth',
    npm: 'nuxt-bearer-auth',
  },
})
